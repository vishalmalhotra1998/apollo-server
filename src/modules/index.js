import { fileLoader, mergeTypes } from 'merge-graphql-schemas';

import path from 'path';

import * as user from './user';

import * as trainee from './trainee';

const typesArray = fileLoader(path.join(__dirname, './**/*.graphql'));

const typeDefs = mergeTypes(typesArray, { all: true });

const { Query } = user;

const { traineeMutation, traineeQuery }= trainee;


export default {
  resolvers: {
    Query: {
      ...Query,
      ...traineeQuery
    },
    Mutation:{
      ...traineeMutation
     }
  },
  typeDefs,
};
