import { RESTDataSource } from 'apollo-datasource-rest';
import configuration from '../config/configuration';
class UserApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${configuration.URL}/api/user`;
  }
  getMe = () => {

  };

  loginUser = (payload) => {
    const { email, password } = payload;
    return this.post('/login', { email, password });
  };
}

export default UserApi;
