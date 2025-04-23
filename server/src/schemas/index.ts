import z, { string } from "zod";
export const getId = z.object({
  id: z.string().transform((val, ctx) => {
    const num = Number(val);
    if (isNaN(num) || !Number.isInteger(num)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "ID must be a valid number",
      });
      return z.NEVER;
    }
    return num;
  }),
});

export const getParamsId = z.object({
  params: getId,
});

export type GetId = z.infer<typeof getParamsId>;
