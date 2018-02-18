import axios from 'axios';

export default {
  user: {
    //login functions takes credentials and makes api request using axios to get user object with token
    login: (credentials) => axios.post('/api/auth', { credentials }).then(res => res.data.user)
  }
}
