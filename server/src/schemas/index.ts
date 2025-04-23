import z from "zod";

export const getId = z.object({
  id: z.string().refine(
    (val) => {
      const num = Number(val);
      return !isNaN(num) && Number.isInteger(num);
    },
    {
      message: "ID must be a valid number",
    }
  ),
});

export const getParamsId = z.object({
  params: getId,
});

export type GetId = z.infer<typeof getParamsId>;
