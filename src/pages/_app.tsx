import "../styles/index.css";
import { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { fork, hydrate, root, Scope, serialize } from "effector-root";
import { attachLogger } from "effector-logger/attach";
import "effector-logger/inspector";
import { Provider } from "effector-react/scope";

let clientScope: Scope;

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
export default function StarterApp({
  Component,
  pageProps,
}: AppPropsWithLayout) {
  const scope = fork(root);
  hydrate(scope, {
    values: {
      ...(clientScope && serialize(clientScope)),
      ...pageProps.initialState,
    },
  });
  process.env.ENVIRONMENT === "development" && attachLogger(scope);
  if (typeof window !== "undefined") clientScope = scope;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Provider value={scope}>{getLayout(<Component {...pageProps} />)}</Provider>
  );
}
