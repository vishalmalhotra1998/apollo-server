import express from 'express';
import { ApolloServer } from 'apollo-server-express';

class Server {

  constructor(config) {
    this.app = express();
    this.config = config;
  }

  run = () => {
    const {
      app,
      config: { PORT: port },
    } = this;
    app.listen(port, () => {
      console.log('App is Running on Port', port);
    });

    return this;
  };

  setUpApollo = async (schema) => {
    const { app } = this;
    this.server = new ApolloServer({
      ...schema,
    });
    this.server.applyMiddleware({ app });
    this.run();
  };
}

export default Server;
