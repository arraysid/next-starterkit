import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export function ButtonPayments() {
  return (
    <Link href="/payments" className={buttonVariants()}>
      Go to payments
    </Link>
  );
}
