import { errorHandler } from '../../libs/errorHandler';
const resolver = {
  getAllTrainee: async (parent, args, context) => {
    try {
      const { dataSources: { traineeApi } } = context;
      const response = await traineeApi.list(args);
      const { data } = response;
      return data;
    }
    catch (error) {
      const errorData= errorHandler(error);
      const { message }= errorData;
      return  new Error(message);
    }
  }
};


export default resolver;
