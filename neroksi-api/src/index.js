import http from 'http'

import logger from './utils/logger'
import { PORT } from './utils/config'
import app from './app'

const server = http.createServer(app.callback()).listen(PORT);

server.on('listening', () => {
  logger.info(`Server listening to port ${PORT}`);
});
