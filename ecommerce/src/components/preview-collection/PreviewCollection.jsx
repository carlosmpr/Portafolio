import React from "react";
import "./previewCollection.scss";
import CollectionItem from '../collection-item/CollectionItem'
export default function PreviewCollection({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}
