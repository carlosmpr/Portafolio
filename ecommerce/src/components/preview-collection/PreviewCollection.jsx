import React from "react";
import "./previewCollection.scss";
import CollectionItem from '../collection-item/CollectionItem'
export default function PreviewCollection({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((_, idx) => idx < 4)
          .map(({id, ...itemsProps}) => (
            <CollectionItem key={id} {...itemsProps} />
          ))}
      </div>
    </div>
  );
}
