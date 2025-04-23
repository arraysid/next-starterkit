import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export function ButtonSignin() {
  return (
    <Link href="/signin" className={buttonVariants()}>
      Signin
    </Link>
  );
}
