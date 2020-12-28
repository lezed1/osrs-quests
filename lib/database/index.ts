import 'reflect-metadata';
import * as TypeORM from 'typeorm';
import { User } from './entity/User';

let databaseConnection: TypeORM.Connection;

const dbConfig = {
  url: process.env.DATABASE_URI,
};

export const createConnection = async (): Promise<TypeORM.Connection> => {
  if (databaseConnection) {
    return databaseConnection;
  }
  // create TypeORM connection
  try {
    databaseConnection = await TypeORM.createConnection({
      type: 'postgres',
      url: dbConfig.url,
      entities: [User],
      synchronize: true,
      logging: false,
    });
  } catch (e) {
    console.error(
      'Could not create a connection with the database, check settings!',
      e
    );
    throw e;
  }
  if (!databaseConnection) {
    throw new Error('database connection still does not exist!');
  }
  return databaseConnection;
};
