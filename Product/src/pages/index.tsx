import { ReactElement } from "react";

import Contents from "../template/contents";

import Layout from "../template/layout";

export default function HomePage() {
  return <Contents />;
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout homePage>{page}</Layout>;
};
