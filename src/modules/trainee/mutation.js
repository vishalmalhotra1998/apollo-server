import User from '../../service/user';

const resolver = {
  createTrainee: (parent, args) => User.create(args),
  updateTrainee: (parent, args) => User.update(args),
  deleteTrainee: (parent,args)=> User.delete(args),
};

export default resolver;
