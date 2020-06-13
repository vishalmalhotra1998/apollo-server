import { UserInputError } from 'apollo-server';

const data = {
  id: 1,
  name: 'Vishal Malhotra',
  email: 'vishal.malhotra@successive.tech',
};

const resolver = {
  getMyProfile: () => data,
  getMe: async (parent, args, context) => {
    try {
      const { dataSources } = context;
      const response = await dataSources.userApi.getMe();
      const { data } = response;
      return data;
    }
    catch (error) {
      return new UserInputError('Arguments are invalid', {
        invalidArgs: Object.keys(args)
      });
    }
  }
};

export default resolver;
