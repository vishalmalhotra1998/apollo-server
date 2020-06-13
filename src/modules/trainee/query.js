import { UserInputError } from 'apollo-server';

const resolver = {
  getAllTrainee: async (parent, args, context) => {
    try {
      const { dataSources } = context;
      const response = await dataSources.traineeApi.list(args);
      const { data } = response;
      const { records } = data;
      return records;
    }
    catch (error) {
      return new UserInputError('Arguments are invalid', {
        invalidArgs: Object.keys(args)
      });
    }
  }
};

export default resolver;
