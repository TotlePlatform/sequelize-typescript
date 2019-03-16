import {Sequelize} from 'sequelize-typescript';

import {User} from '../users/User';
import {Post} from '../posts/Post';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:',
  operatorsAliases: false,
  models: [User, Post],
  repositoryMode: true,
});
