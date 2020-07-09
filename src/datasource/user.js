import { RESTDataSource } from 'apollo-datasource-rest';
import configuration from '../config/configuration';

class UserApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${configuration.URL}/api/user`;
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
