import { timestamp } from "drizzle-orm/pg-core";
import { text, varchar, integer, pgTable } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";

export const moviesTable = pgTable("movies", {
  movieId: varchar("movie_id", { length: 255 })
    .primaryKey()
    .$defaultFn(createId),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  duration: integer("duration").notNull(),
  genre: text("genre").array(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const theatersTable = pgTable("theaters", {
  theaterId: varchar("theater_id", { length: 255 })
    .primaryKey()
    .$defaultFn(createId),
  name: varchar("name", { length: 100 }).notNull(),
  location: varchar("location", { length: 255 }).notNull(),
  seatCapacity: integer("seat_capacity").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// export const showTimesTable = pgTable("showtimes", {
//   showTimeId,
// });
