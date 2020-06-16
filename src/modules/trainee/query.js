import { UserInputError } from 'apollo-server';

const resolver = {
  getAllTrainee: async (parent, args, context) => {
    try {
      const { dataSources } = context;
      const response = await dataSources.traineeApi.list(args);
      const { data } = response;
      console.log(data);
      const { records, count } = data;
      return { records, count };
    }
    catch (error) {
      return new UserInputError('Arguments are invalid', {
        invalidArgs: Object.keys(args)
      });
    }
  }
};

const nestedResolver = ({
  Trainee: {
    records: (parent) => parent.records
  }
});

export { resolver, nestedResolver };
