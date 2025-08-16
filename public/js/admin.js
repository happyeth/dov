// DOM Elements
const loginPage = document.getElementById('login-page');
const adminPage = document.getElementById('admin-page');
const loginForm = document.getElementById('login-form');
const logoutBtn = document.getElementById('logout-btn');
const testimonialsBody = document.getElementById('testimonials-body');
const addTestimonialBtn = document.getElementById('add-testimonial-btn');
const testimonialModal = document.getElementById('testimonial-modal');
const modalTitle = document.getElementById('modal-title');
const testimonialForm = document.getElementById('testimonial-form');
const cancelBtn = document.getElementById('cancel-btn');

// Check if already logged in
checkLoginStatus();

// Event Listeners
loginForm.addEventListener('submit', handleLogin);
logoutBtn.addEventListener('click', handleLogout);
addTestimonialBtn.addEventListener('click', () => openModal('add'));
cancelBtn.addEventListener('click', closeModal);
testimonialForm.addEventListener('submit', handleTestimonialSubmit);

// Functions
async function checkLoginStatus() {
    try {
        const response = await fetch('/api.php?check_auth=true');
        const data = await response.json();
        
        if (data.authenticated) {
            showAdminPage();
            loadTestimonials();
        } else {
            showLoginPage();
        }
    } catch (error) {
        console.error('Error checking login status:', error);
        showLoginPage();
    }
}

async function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    try {
        const formData = new FormData();
        formData.append('action', 'login');
        formData.append('username', username);
        formData.append('password', password);
        
        const response = await fetch('/api.php', {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        
        if (data.success) {
            showAdminPage();
            loadTestimonials();
        } else {
            alert(data.error || 'Login failed');
        }
    } catch (error) {
        console.error('Login error:', error);
        alert('Login failed. Check console for details.');
    }
}

async function handleLogout() {
    try {
        const response = await fetch('/api.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'action=logout'
        });
        
        const data = await response.json();
        
        if (data.success) {
            showLoginPage();
        }
    } catch (error) {
        console.error('Logout error:', error);
    }
}

async function loadTestimonials() {
    try {
        const response = await fetch('/api.php');
        const testimonials = await response.json();
        
        testimonialsBody.innerHTML = '';
        
        testimonials.forEach(testimonial => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${testimonial.id}</td>
                <td>${testimonial.name}</td>
                <td>${testimonial.title}</td>
                <td>${testimonial.quote.substring(0, 50)}...</td>
                <td class="action-buttons">
                    <button class="edit-btn" data-id="${testimonial.id}">Edit</button>
                    <button class="delete-btn" data-id="${testimonial.id}">Delete</button>
                </td>
            `;
            
            testimonialsBody.appendChild(row);
        });
        
        // Add event listeners to action buttons
        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', () => openModal('edit', btn.dataset.id));
        });
        
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', () => deleteTestimonial(btn.dataset.id));
        });
    } catch (error) {
        console.error('Error loading testimonials:', error);
    }
}

function openModal(action, id = null) {
    modalTitle.textContent = action === 'add' ? 'Add Testimonial' : 'Edit Testimonial';
    document.getElementById('testimonial-id').value = id || '';
    
    if (action === 'edit') {
        fetch('/api.php')
            .then(response => response.json())
            .then(testimonials => {
                const testimonial = testimonials.find(t => t.id == id);
                if (testimonial) {
                    document.getElementById('name').value = testimonial.name;
                    document.getElementById('title').value = testimonial.title;
                    document.getElementById('quote').value = testimonial.quote;
                    document.getElementById('avatar').value = testimonial.avatar || '';
                }
            });
    } else {
        testimonialForm.reset();
    }
    
    testimonialModal.style.display = 'flex';
}

function closeModal() {
    testimonialModal.style.display = 'none';
}

async function handleTestimonialSubmit(e) {
    e.preventDefault();
    
    const id = document.getElementById('testimonial-id').value;
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const quote = document.getElementById('quote').value;
    const avatar = document.getElementById('avatar').value;
    
    const action = id ? 'update' : 'add';
    const data = {
        action,
        name,
        title,
        quote,
        avatar
    };
    
    if (id) {
        data.id = id;
    }
    
    try {
        const response = await fetch('/api.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if (result.success) {
            closeModal();
            loadTestimonials();
        }
    } catch (error) {
        console.error('Error saving testimonial:', error);
    }
}

async function deleteTestimonial(id) {
    if (!confirm('Are you sure you want to delete this testimonial?')) return;
    
    try {
        const response = await fetch('/api.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: 'delete',
                id
            })
        });
        
        const result = await response.json();
        
        if (result.success) {
            loadTestimonials();
        }
    } catch (error) {
        console.error('Error deleting testimonial:', error);
    }
}

function showLoginPage() {
    loginPage.style.display = 'block';
    adminPage.style.display = 'none';
}

function showAdminPage() {
    loginPage.style.display = 'none';
    adminPage.style.display = 'block';
}