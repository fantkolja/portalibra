import { ApiServer } from './api/server';

const port: number = Number(process.env.API_PORT);
const server: ApiServer = new ApiServer(port);

server.start();
