import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export function ButtonDashboard() {
  return (
    <Link href="/dashboard" className={buttonVariants()}>
      Dashboard
    </Link>
  );
}
