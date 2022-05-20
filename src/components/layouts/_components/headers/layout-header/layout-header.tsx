import { FC } from "react";
import { DefaultHeader } from "@/components/layouts/_components/headers/default-header";
import { Header, LayoutHeaderProps } from "./layout-header.d";

const headers: Record<Header, any> = {
  default: DefaultHeader,
};

export const LayoutHeader: FC<LayoutHeaderProps> = ({ header = "default" }) => {
  const Component = headers[header];
  return (
    <header className="shadow-header">
      {Component ? <Component /> : <DefaultHeader />}
    </header>
  );
};
