// import { Head } from "next/document"
import { FC } from "react";
import { MainLayoutProps } from "./main-layout.d";

export const MainLayout: FC<MainLayoutProps> = ({ children, title }) => (
  // useGate(MQTTGate)
  // useGate(RootLkGate)
  <div className="bg-white">
    {/* <LayoutPopup /> */}
    {/* <NotificationsContainer /> */}
    {/* <LayoutDrawer /> */}
    <div className="drawer h-screen drawer-mobile">
      <input id="main-menu" type="checkbox" className="drawer-toggle" />
      {/* <Sidebar /> */}
      {/*<Head>*/}
      {/*	<title>{title}</title>*/}
      {/*</Head>*/}
      <div className="flex-grow overflow-x-hidden drawer-content bg-base-200 flex flex-col">
        <div className="container mx-auto px-6 py-8">{children}</div>
      </div>
    </div>
  </div>
);
