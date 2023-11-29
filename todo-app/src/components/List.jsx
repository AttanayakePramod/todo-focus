import React from 'react'
import Item from './Item'

const List = (props) => {
    return (
      <div>
        <div className="grid justify-items-center">
        {props.items?.map((item, index) => (
  <Item key={index} title={item.title} description={item.description} status={item.status} id={item.id} loadData={props.loadData}/>
))}
        </div>
      </div>
    );
  };

  export default List;