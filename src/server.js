import express from 'express';
import { ApolloServer } from 'apollo-server-express';

class Server {

  constructor(config) {
    this.app = express();
    this.config = config;
  }

  bootStrap = () => {
    this.setUpRoutes();
    return this;
  };

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

  setUpRoutes = () => {
    const { app } = this;
    app.get('/health', (req,res) => {
      console.log('I am Ok');
      res.send('I am OK');
    });
    return this;
  };
}

export default Server;
