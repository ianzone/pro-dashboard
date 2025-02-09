import '@dotenvx/dotenvx/config';
import { z } from 'zod';

export const envSchema = z.object({
  PORT: z.coerce.number().min(3000),
});

const env = envSchema.parse(process.env);

export default env;
