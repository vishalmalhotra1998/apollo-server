import { UserInputError } from 'apollo-server';

const resolver = {
  loginUser: async (parent, args, context) => {
    try {
      const { payload: { email, password } } = args;
      const { dataSources: { userApi } } = context;
      const response = await userApi.loginUser({ email, password });
      const { data } = response;
      return data;
    } catch (error) {
      return new UserInputError('Arguments are invalid', {
        invalidArgs: Object.keys(args)
      });
    }
  },
};

export default resolver;
