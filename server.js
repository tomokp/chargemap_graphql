import { ApolloServer } from 'apollo-server-express';
import schemas from './schemas/index.js';
import resolvers from './resolvers/index.js';
import express from 'express';
import dotenv from 'dotenv';
import db from './database/db.js';

dotenv.config();

(async () => {
   try {
      const conn = await db();
      if (conn) {
         console.log('Connected successfully.');
      }

      const server = new ApolloServer({
         typeDefs: schemas,
         resolvers,
      });

      const app = express();

      server.applyMiddleware({ app });

      app.listen({ port: 3000 }, () =>
         console.log(
            `🚀 Server ready at http://localhost:3000${server.graphqlPath}`
         )
      );
   } catch (e) {
      console.log('server error: ' + e.message);
   }
})();