export const useAuth = () => {
  return useState('auth', () => ({
    isAuthenticated: false,
    user: null,
    features: {
      Admin: ['system_analytics', 'user_management', 'content_moderation'],
      Doctor: ['note_submission', 'patient_management', 'appointment_tracking'],
      Worker: ['note_editing', 'task_queue', 'quality_control']
    }
  }));
};