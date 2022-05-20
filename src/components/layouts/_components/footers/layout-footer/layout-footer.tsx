import { FC } from "react";
import { AuthFooter } from "@/components/layouts/_components/footers/auth-footer";
import { DefaultFooter } from "@/components/layouts/_components/footers/default-footer";
import { Footer, LayoutFooterProps } from "./layout-footer.d";
import { cc } from "@/utils/classnames";

const footers: Record<Footer, any> = {
  auth: AuthFooter,
  default: DefaultFooter,
};

export const LayoutFooter: FC<LayoutFooterProps> = ({
  footer = "default",
}) => {
  const Component = footers[footer];
  return (
    <footer className="bg-zinc-100">
      {Component ? <Component /> : <DefaultFooter />}
    </footer>
  );
};
