import { RESTDataSource } from 'apollo-datasource-rest';

class UserApi extends RESTDataSource {
  constructor(config) {
    super();
    this.baseURL = `${config.URL}/api/user`;
  }
  getMe = () => {

  };

  loginUser = (payload) => {
    const { email, password } = payload;
    return this.post('/login', { email, password });
  };
}

export default UserApi;
