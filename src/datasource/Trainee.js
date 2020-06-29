import { RESTDataSource } from 'apollo-datasource-rest';
import configuration from '../config/configuration';

class TraineeApi extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = `${configuration.URL}/api/trainee`;
  }
  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }
  createTrainee = (body) => {
    const { name, email, password } = body;
    return this.post('/', { name, email, password });
  }
  updateTrainee = (body) => {
    const { id, update } = body;
    return this.put('/', { id, ...update });
  }
  deleteTrainee = (params) => {
    const { id } = params;
    return this.delete(`/${id}`);
  }
  list = (query) => {
    const { options } = query;
    const { skip, limit } = options;
    return this.get('/', {
      skip,
      limit
    });
  }
}

export default TraineeApi;
