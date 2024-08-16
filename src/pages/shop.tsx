import Layout from "@/components/common/Layout";
import ShopLayout from "@/components/shop/ShopLayout";
import type { ReactElement } from "react";

const ShopPage = () => {
  return (
    <>
      <div>ShopPage</div>
    </>
  );
};
export default ShopPage;

ShopPage.getLayout = function getLayout(page: ReactElement) {
  return <ShopLayout>{page}</ShopLayout>;
};
