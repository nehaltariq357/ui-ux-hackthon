import Banner from "./component/banner/page";

import CompareDesign from "./component/compare-design/page";

import Product from "./product/page";

export default function Home() {
  return (
    <div>
      <Banner />
      <CompareDesign />
      <Product />
    </div>
  );
}
