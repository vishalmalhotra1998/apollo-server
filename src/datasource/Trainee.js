import { RESTDataSource } from 'apollo-datasource-rest';

class TraineeApi extends RESTDataSource {

  constructor(config) {
    super();
    this.baseURL = `${config.URL}/api/trainee`;
  }
  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }
  createTrainee = (body) => {
    const { name, email, password } = body;
    console.log(body);
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
