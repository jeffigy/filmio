import db from "@/db";
import { showtimesTable } from "@/db/schema";
import { ShowtimeInsert } from "@/types/showtime.type";
import { eq } from "drizzle-orm";

export const findAllShowtimes = async () => {
  return await db.query.showtimesTable.findMany({
    with: {
      movie: true,
      theater: true,
    },
  });
};

export const findShowtimeById = async (showtimeId: string) => {
  const showtime = await db.query.showtimesTable.findFirst({
    where: eq(showtimesTable.showtimeId, showtimeId),
    with: {
      movie: true,
      theater: true,
    },
  });

  return showtime;
};

export const createShowtime = async (payload: ShowtimeInsert) => {
  const [createdShowtime] = await db
    .insert(showtimesTable)
    .values({ ...payload })
    .returning();

  return createdShowtime;
};

export const updateShowtime = async (payload: ShowtimeInsert, id: string) => {
  const [updatedShowtime] = await db
    .update(showtimesTable)
    .set({ ...payload })
    .where(eq(showtimesTable.showtimeId, id))
    .returning();

  return updatedShowtime;
};

export const deleteShowtime = async (id: string) => {
  const [deletedShowtime] = await db
    .delete(showtimesTable)
    .where(eq(showtimesTable.showtimeId, id))
    .returning();

  return deletedShowtime;
};
