import database from '../database';

export const syncDb = async (): Promise<void> => {
  try {
    await database.authenticate();
    await database.sync();
  } catch (error) {
    console.log(
      '============ database sync ================ \n ',
      error,
      '============ database sync ================ \n '
    );
  }
};
