import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { createTransaction } from "@/server/midtrans";

export const paymentRouter = createTRPCRouter({
  checkout: publicProcedure.mutation(async () => {
    const { token } = await createTransaction({
      first_name: "Harun",
      last_name: "Alrasyid",
      email: "arraysdotid@gmail.com",
      gross_amount: 10000,
    });

    return { token };
  }),
});
