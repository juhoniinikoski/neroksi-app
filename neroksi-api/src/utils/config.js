import dotenv from 'dotenv'
import path from 'path'
import { knexSnakeCaseMappers } from 'objection'

import knexfile from '../../knexfile'

dotenv.config({ path: path.resolve(__dirname, '..', '.env') })

export const PORT = process.env.PORT || 4000

export const JWT_SECRET = process.env.JWT_SECRET

export const KNEX_CONFIG = {
  ...knexfile,
  ...knexSnakeCaseMappers(),
}

export const ACCESS_TOKEN_EXPIRATION_TIME = 1000 * 60 * 60 * 24 * 7
