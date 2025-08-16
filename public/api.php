<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Start session
session_start();

// Set headers
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Database connection
$db = new mysqli('localhost', 'root', '', 'doc2doc');

if ($db->connect_error) {
    die(json_encode(['success' => false, 'error' => 'Database connection failed']));
}

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Handle POST requests
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Handle form data
    if (!empty($_POST['action'])) {
        if ($_POST['action'] === 'login') {
            $username = $db->real_escape_string($_POST['username']);
            $password = $db->real_escape_string($_POST['password']);
            
            $result = $db->query("SELECT * FROM admins WHERE username = '$username' AND password = '$password'");
            
            if ($result->num_rows > 0) {
                $_SESSION['admin'] = true;
                $_SESSION['admin_username'] = $username;
                echo json_encode(['success' => true]);
                exit;
            } else {
                echo json_encode(['success' => false, 'error' => 'Invalid credentials']);
                exit;
            }
        }
        
        if ($_POST['action'] === 'logout') {
            session_destroy();
            echo json_encode(['success' => true]);
            exit;
        }
    }
    
    // Handle JSON input
    $input = json_decode(file_get_contents('php://input'), true);
    if ($input && isset($input['action'])) {
        // Verify admin session
        if (!isset($_SESSION['admin']) || $_SESSION['admin'] !== true) {
            echo json_encode(['success' => false, 'error' => 'Unauthorized']);
            exit;
        }
        
        $action = $input['action'];
        
        if ($action === 'add') {
            $name = $db->real_escape_string($input['name']);
            $title = $db->real_escape_string($input['title']);
            $quote = $db->real_escape_string($input['quote']);
            $avatar = $db->real_escape_string($input['avatar'] ?? '');
            
            $db->query("INSERT INTO testimonials (name, title, quote, avatar) VALUES ('$name', '$title', '$quote', '$avatar')");
            echo json_encode(['success' => true, 'id' => $db->insert_id]);
        }
        
        if ($action === 'update') {
            $id = (int)$input['id'];
            $name = $db->real_escape_string($input['name']);
            $title = $db->real_escape_string($input['title']);
            $quote = $db->real_escape_string($input['quote']);
            $avatar = $db->real_escape_string($input['avatar'] ?? '');
            
            $db->query("UPDATE testimonials SET name='$name', title='$title', quote='$quote', avatar='$avatar' WHERE id=$id");
            echo json_encode(['success' => true]);
        }
        
        if ($action === 'delete') {
            $id = (int)$input['id'];
            $db->query("DELETE FROM testimonials WHERE id=$id");
            echo json_encode(['success' => true]);
        }
    }
    exit;
}

// Handle GET requests
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Authentication check
    if (isset($_GET['check_auth'])) {
        echo json_encode(['authenticated' => isset($_SESSION['admin']) && $_SESSION['admin'] === true]);
        exit;
    }
    
    // Get testimonials
    $result = $db->query("SELECT * FROM testimonials ORDER BY created_at DESC");
    $testimonials = [];
    
    while ($row = $result->fetch_assoc()) {
        $testimonials[] = $row;
    }
    
    echo json_encode($testimonials);
    exit;
}

$db->close();
?>