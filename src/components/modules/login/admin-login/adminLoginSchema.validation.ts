import { z } from "zod";


// Zod validation schema
export const adminLoginValidationSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
  });