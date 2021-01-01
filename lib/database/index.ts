import 'reflect-metadata';
import * as TypeORM from 'typeorm';
import { User } from './entity/User';

const dbConfig = {
  url: process.env.DATABASE_URI,
};

// This moudle was inspired by https://github.com/typeorm/typeorm/issues/5876#issue-599814185

/* Keeps track of whether this Database instance remembers making a new connection. If it doesn't,
 * and an existing connection was found anyway, that means that the module was hot-reloaded.
 */
let hasCreatedConnection = false;

const createNewConnection = async (name) => {
  hasCreatedConnection = true;
  return TypeORM.createConnection({
    name,
    type: 'postgres',
    url: dbConfig.url,
    entities: [User],
    synchronize: true,
    logging: false,
  });
};

export const getConnection = async (): Promise<TypeORM.Connection> => {
  const DEFAULT_CONNECTION_NAME = 'default';
  const currentConnection = TypeORM.getConnectionManager().has(
    DEFAULT_CONNECTION_NAME
  )
    ? TypeORM.getConnectionManager().get(DEFAULT_CONNECTION_NAME)
    : undefined;

  // If connection exists but we don't remember creating it, it's because of hot reloading
  // and that means a new connection needs to be created, or else entity metadata won't match
  // from the old session.
  // https://stackoverflow.com/questions/60677582/entitymetadatanotfound-no-metadata-for-businessapplication-was-found
  if (currentConnection && !hasCreatedConnection) {
    console.debug('recreating connection due to hot reloading');
    if (currentConnection.isConnected) {
      await currentConnection.close();
    }
    console.debug('done closing, making new connection..');
    return createNewConnection(DEFAULT_CONNECTION_NAME);
  }
  if (currentConnection) {
    if (!currentConnection.isConnected) {
      return currentConnection.connect();
    } else return currentConnection;
  } else {
    return createNewConnection(DEFAULT_CONNECTION_NAME);
  }
};
