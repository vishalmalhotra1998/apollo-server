import subscription from '../../libs/constants';
import pubsub from '../pubsub';

const resolver = {
  traineeAdded :({
    subscribe: () => pubsub.asyncIterator([subscription.TRAINEE_ADDED])
  }),
  traineeUpdated: ({
    subscribe: () => pubsub.asyncIterator([subscription.TRAINEE_UPDATED])
  }),
  traineeDeleted: ({
    subscribe: () => pubsub.asyncIterator([subscription.TRAINEE_DELETED])
  }),
};

export default resolver;
