import { RESTDataSource } from 'apollo-datasource-rest';

class UserApi extends RESTDataSource {
  constructor(config) {
    super();
    this.baseURL = config.URL;
  }
  getMe = () => {

  };

  loginUser = (payload) => {
    const { email, password } = payload;
    return this.post('user/login', { email, password });
  };
}

export default UserApi;
