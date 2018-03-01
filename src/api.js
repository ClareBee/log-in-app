import axios from 'axios';

export default {
  user: {
    //login functions takes credentials and makes api request using axios to get user object with token
    login: (credentials) => axios.post('/api/auth', { credentials }).then(res => res.data.user),
    signup: user => axios.post('/api/users', { user }).then(res => res.data.user),
    confirm: token => axios.post('/api/auth/confirmation', {token}).then(res => res.data.user),
    resetPasswordRequest: email => axios.post('/api/auth/reset_password', { email }),
    validateToken: token => axios.post('/api/auth/validate_token', { token })
  }
}
