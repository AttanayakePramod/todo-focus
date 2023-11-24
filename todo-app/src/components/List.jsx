import React from 'react'
import Item from './Item'

const List = (items) => {
    return (
      <div>
        <div className="grid justify-items-center">
        {items.map((item, index) => (
  <Item key={index} name={item.title} description={item.description} />
))}
        </div>
      </div>
    );
  };

  export default List;