import { UserInputError } from 'apollo-server';
import subscription from '../../libs/constants';
import pubsub from '../pubsub';

const resolver = {
  createTrainee: async (parent, args, context) => {
    try {
      const { dataSources } = context;
      const response = await dataSources.traineeApi.createTrainee(args);
      const { data } = response;
      pubsub.publish(subscription.TRAINEE_ADDED, { traineeAdded: data });
      return data;
    }
    catch (error) {
      return new UserInputError('Arguments are invalid', {
        invalidArgs: Object.keys(args)
      });
    }
  },
  updateTrainee: async (parent, args, context) => {
    try {
      const { dataSources } = context;
      const response = await dataSources.traineeApi.updateTrainee(args);
      const { data } = response;
      const { id } = data;
      pubsub.publish(subscription.TRAINEE_UPDATED, { traineeUpdated: id });
      return id;
    }
    catch (error) {
      return new UserInputError('Arguments are invalid', {
        invalidArgs: Object.keys(args)
      });
    }
  },
  deleteTrainee: async (parent, args, context) => {
    try {
      const { dataSources } = context;
      const response = await dataSources.traineeApi.deleteTrainee(args);
      const { data } = response;
      const { id } = data;
      pubsub.publish(subscription.TRAINEE_DELETED, { traineeDeleted: id });
      return id;
    }
    catch (error) {
      return new UserInputError('Arguments are invalid', {
        invalidArgs: Object.keys(args)
      });
    }
  },
};

export default resolver;
