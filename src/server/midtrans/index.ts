import { env } from "@/env";
import { generateId } from "better-auth";
import midtransClient from "midtrans-client";
import type {
  CreateTransactionParameters,
  CreateTransactionResponse,
  CustomerDetails,
  TransactionDetails,
} from "./types";

const isSandbox = env.MIDTRANS_SERVER_KEY.startsWith("SB");

const snap = new midtransClient.Snap({
  isProduction: !isSandbox,
  serverKey: env.MIDTRANS_SERVER_KEY,
});

export async function createTransaction(
  params: CustomerDetails & Pick<TransactionDetails, "gross_amount">,
) {
  const transactionParameters: CreateTransactionParameters = {
    transaction_details: {
      order_id: generateId(),
      gross_amount: params.gross_amount,
    },
    customer_details: {
      first_name: params.first_name,
      last_name: params.last_name,
      email: params.email,
    },
    credit_card: {
      secure: true,
    },
  };

  const transaction: CreateTransactionResponse = await snap.createTransaction(
    transactionParameters,
  );

  return transaction;
}
