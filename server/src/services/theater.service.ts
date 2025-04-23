import db from "@/db";
import { theatersTable } from "@/db/schema";
import { TheaterInsert } from "@/types/theater.type";
import { eq } from "drizzle-orm";

export const findAllTheaters = async () => {
  return await db.select().from(theatersTable);
};

export const findTheaterById = async (id: number) => {
  const [theater] = await db
    .select()
    .from(theatersTable)
    .where(eq(theatersTable.theaterId, id));

  return theater;
};

export const createTheater = async (payload: TheaterInsert) => {
  const [createdTheater] = await db
    .insert(theatersTable)
    .values({ ...payload })
    .returning();

  return createdTheater;
};

export const updateTheater = async (payload: TheaterInsert, id: number) => {
  const [updatedTheater] = await db
    .update(theatersTable)
    .set({ ...payload })
    .where(eq(theatersTable.theaterId, id))
    .returning();

  return updatedTheater;
};

export const deleteTheater = async (id: number) => {
  const [deletedTheater] = await db
    .delete(theatersTable)
    .where(eq(theatersTable.theaterId, id))
    .returning();

  return deletedTheater;
};
