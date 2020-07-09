import subscription from '../../libs/constants';
import { errorHandler } from '../../libs/errorHandler';
import pubsub from '../pubsub';

const resolver = {
  createTrainee: async (parent, args, context) => {
    try {
      const { dataSources: { traineeApi } } = context;
      const { inputData } = args;
      const response = await traineeApi.createTrainee(inputData);
      const { data } = response;
      pubsub.publish(subscription.TRAINEE_ADDED, { traineeAdded: data });
      return data;
    }
    catch (error) {
      const errorData= errorHandler(error);
      const { message }= errorData;
      return  new Error(message);
    }
  },
  updateTrainee: async (parent, args, context) => {
    try {
      const { dataSources: { traineeApi } } = context;
      const { update: { name, email } } = args;
      const response = await traineeApi.updateTrainee(args);
      const { data: { id } } = response;
      pubsub.publish(subscription.TRAINEE_UPDATED, { traineeUpdated: { originalId: id, name, email } });
      const updatedData = { originalId: id, name, email };
      return updatedData;
    }
    catch (error) {
      const errorData= errorHandler(error);
      const { message }= errorData;
      return  new Error(message);
    }
  },
  deleteTrainee: async (parent, args, context) => {
    try {
      const { dataSources: { traineeApi } } = context;
      const response = await traineeApi.deleteTrainee(args);
      const { data: { id } } = response;
      pubsub.publish(subscription.TRAINEE_DELETED, { traineeDeleted: id });
      return id;
    }
    catch (error) {
      const errorData= errorHandler(error);
      const { message }= errorData;
      return  new Error(message);
    }
  },
};

export default resolver;
