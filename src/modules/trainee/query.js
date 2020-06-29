import { UserInputError } from 'apollo-server';

const resolver = {
  getAllTrainee: async (parent, args, context) => {
    try {
      const { dataSources: { traineeApi } } = context;
      const response = await traineeApi.list(args);
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
