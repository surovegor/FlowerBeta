import { ReactElement } from "react";
import { AuthLayout } from "@/components/layouts/auth-layout/auth-layout";
import Link from "next/link";

export default function AuthPage(): JSX.Element {
  return (
    <main className={"container px-6"}>
      <h1 className={"mb-4"}>Login</h1>
      <Link href="/">
        <a>Back</a>
      </Link>
    </main>
  );
}

AuthPage.getLayout = (page: ReactElement): ReactElement => {
  return <AuthLayout onlyRegister>{page}</AuthLayout>;
};
