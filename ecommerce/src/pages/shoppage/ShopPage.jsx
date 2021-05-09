import React from "react";
import PreviewCollection from "../../components/preview-collection/PreviewCollection";
import SHOP_DATA from "./shop-data";

export default function ShopPage() {
  const [info] = React.useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {info.map(({id,...collectionProps}) => (
        <PreviewCollection key={id} {...collectionProps} />
      ))}
    </div>
  );
}
