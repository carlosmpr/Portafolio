import React from "react";
import "./collectionItem.scss";
import Button from '../buttom/Button';
import {useDispatch} from 'react-redux';
import {addItem} from '../../redux/cart/cart.action'
export default function CollectionItem({ item }) {
  const dispatch = useDispatch();
  const {imageUrl,name,price} =item
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button inverted={true} onClick={()=>dispatch(addItem(item))}>Add to cart</Button>
    </div>
  );
}
