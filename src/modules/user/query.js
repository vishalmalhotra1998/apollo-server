import { errorHandler } from '../../libs/errorHandler';
const resolver = {
  getMe: async (parent, args, context) => {
    try {
      const { dataSources: { userApi } } = context;
      const response = await userApi.getMe();
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
