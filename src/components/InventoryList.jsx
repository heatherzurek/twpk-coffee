import React from 'react';
import Coffee from './Coffee';
import PropTypes from 'prop-types';

export default function InventoryList(props){
  return (
    <div>
      <hr/>
      {props.inventoryList.map((coffee, index) =>
        <Coffee name={coffee.name}
          tasting={coffee.tasting}
          origins={coffee.origins}
          price={coffee.price}
          key={index} />
      )}
    </div>
  );
}

InventoryList.propTypes = {
  inventoryList: PropTypes.array
};
