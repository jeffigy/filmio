import {
  timestamp,
  text,
  varchar,
  integer,
  pgTable,
} from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";
import { relations } from "drizzle-orm";

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

export const showtimesTable = pgTable("showtimes", {
  showtimeId: varchar("showtime_id", { length: 255 })
    .primaryKey()
    .$defaultFn(createId),
  startTime: timestamp("start_time").notNull(),
  endTime: timestamp("end_time").notNull(),
  theaterId: varchar("theater_id", { length: 255 }).notNull(),
  movieId: varchar("movie_id", { length: 255 }).notNull(),
});

export const movieRelations = relations(moviesTable, ({ many }) => ({
  showTime: many(showtimesTable),
}));

export const theaterRelations = relations(theatersTable, ({ many }) => ({
  showTime: many(showtimesTable),
}));

export const showTimeRelations = relations(showtimesTable, ({ one }) => ({
  movie: one(moviesTable, {
    fields: [showtimesTable.movieId],
    references: [moviesTable.movieId],
  }),

  theater: one(theatersTable, {
    fields: [showtimesTable.theaterId],
    references: [theatersTable.theaterId],
  }),
}));
