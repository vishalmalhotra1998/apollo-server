import User from '../../service/user';

const resolver = {
  getAllTrainee: () => User.list(),
  getPerticularTrainee: (parent, args) => User.getPerticularData(args),
};

export default resolver;
