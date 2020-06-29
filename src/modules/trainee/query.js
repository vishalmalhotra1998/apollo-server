import User from '../../service/user';

const resolver = {
  getAllTrainee: () => User.list(),
  getTrainee: (parent, args) => User.getTrainee(args),
};

export default resolver;
