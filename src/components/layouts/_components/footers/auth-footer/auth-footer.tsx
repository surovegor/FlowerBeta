import { FC } from "react";
import { AuthFooterProps } from "./auth-footer.d";

export const AuthFooter: FC<AuthFooterProps> = () => {
  return (
    <footer className="w-full flex flex-wrap md:grid md:grid-cols-[1fr_auto_1fr] gap-5 md:gap-9 items-center justify-between px-5 dmd:py-5">
      <div className="md:py-2.5 text-gray text-lg leading-6 dmd:-order-1 dark:text-gray-100">
        Footer 2
      </div>
    </footer>
  );
};
