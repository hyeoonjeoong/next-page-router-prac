import Layout from "@/components/common/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { NextPage } from "next";

import type { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // getLayout 있으면 사용, 아니면 기본 페이지
  const getLayout = Component.getLayout ?? ((page) => page);

  // return getLayout(<Component {...pageProps} />);

  return <Layout>{getLayout(<Component {...pageProps} />)}</Layout>;
}
