import User from '../../service/user';
import subscription from '../../libs/constants';
import pubsub from '../pubsub';

const resolver = {
  createTrainee: (parent, args) => {
    const createdTrainee= User.create(args);
    pubsub.publish(subscription.TRAINEE_ADDED,{traineeAdded: createdTrainee});
    return createdTrainee;
  },
  updateTrainee: (parent, args) => {
    const updateTrainee=User.update(args);
    pubsub.publish(subscription.TRAINEE_UPDATED,{traineeUpdated: updateTrainee});
    return updateTrainee;
  },
  deleteTrainee: (parent,args)=> {
    const deleteTrainee= User.delete(args);
    pubsub.publish(subscription.TRAINEE_DELETED,{traineeDeleted: deleteTrainee});
    return deleteTrainee;

  },
};

export default resolver;
