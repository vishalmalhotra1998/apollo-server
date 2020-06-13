import { RESTDataSource } from 'apollo-datasource-rest';

class UserApi extends RESTDataSource {
  constructor(config) {
    super();
    this.baseURL = `${config.URL}/api/user`;
  }
  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }

  getMe = () => this.get('/me');

  loginUser = (payload) => {
    const { email, password } = payload;
    return this.post('/login', { email, password });

  };
}

export default UserApi;
