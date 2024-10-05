import { boolean, serial, varchar } from "drizzle-orm/pg-core"; 
import { pgTable } from "drizzle-orm/pg-core"; 

export const Users = pgTable("users", {
    id: serial('id').primaryKey(), // serial is PostgreSQL specific for auto-incrementing IDs
    name: varchar('name', { length: 255 }).notNull(), // varchar with length specified
    email: varchar('email', { length: 255 }).notNull(), // varchar with length specified
    imageUrl: varchar('imageUrl', { length: 255 }), // Optional field
    subscription: boolean('subscription').default(false) // boolean field with a default value
});
