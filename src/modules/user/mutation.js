import { errorHandler } from '../../libs/errorHandler';
const resolver = {
  loginUser: async (parent, args, context) => {
    try {
      const { payload: { email, password } } = args;
      const { dataSources: { userApi } } = context;
      const response = await userApi.loginUser({ email, password });
      const { data } = response;
      return data;
    } catch (error) {
      const errorData= errorHandler(error);
      const { message }= errorData;
      return  new Error(message);
    }
  },
};

export default resolver;
