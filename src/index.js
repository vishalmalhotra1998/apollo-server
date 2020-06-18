import config from './config/configuration';
import Server from './server';
import schema from './modules';

const server = new Server(config);

server.bootStrap().setUpApollo(schema);

