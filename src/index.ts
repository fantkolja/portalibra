// import * as express from 'express';
import { ApiServer } from './api/server';

const server: ApiServer = new ApiServer(5000);

server.start();
