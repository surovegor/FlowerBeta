import { FC } from "react";
import type { HeaderUserMenuProps } from "./header-user-menu.d";
import Link from "next/link";
import { cc } from "@/utils/classnames";

export const HeaderUserMenu: FC<HeaderUserMenuProps> = ({
  onlyRegister = false,
  onlyLogin = false,
  className,
}) => {
  return (
    <div className={cc(["flex gap-3 items-center", className])}>
      {!onlyRegister && (
        <Link href="/auth">
          <a className="text-gray hover:text-gray-200 text-sm leading-none transition-colors ease-in duration-150 dark:text-gray-100 dark:hover:text-gray-200">
            Log In
          </a>
        </Link>
      )}

      {!onlyLogin && (
        <>
          <span className="text-gray">|</span>
          <Link href={"/registration"}>
            <a className="text-primary hover:text-primary-500 text-sm leading-none transition-colors ease-in duration-150 dark:text-primary-500 dark:hover:text-primary">
              {"registration"}
            </a>
          </Link>
        </>
      )}
    </div>
  );
};
