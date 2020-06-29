import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import { UserApi, TraineeApi } from './datasource';

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
      httpServer,
      config: { PORT: port },
    } = this;
    httpServer.listen(port, () => {
      console.log('App is Running on Port', port);
    });
    return this;
  };

  setUpApollo = async (schema) => {
    const { app } = this;
    this.server = new ApolloServer({
      ...schema,
      dataSources: () => ({
        userApi: new UserApi(),
        traineeApi: new TraineeApi(),
      }),
      context: ({req})=>{
        if(req){
          return {
            token : req.headers.authorization
          };
        }
        return {};
      }
    });
    this.server.applyMiddleware({ app });
    this.httpServer = createServer(app);
    this.server.installSubscriptionHandlers(this.httpServer);
    this.run();
  };

  setUpRoutes = () => {
    const { app } = this;
    app.get('/health', (req,res) => {
      res.send('I am OK');
    });
    return this;
  };
}

export default Server;
