import React from 'react';
import { useSelector } from 'react-redux';


const Catalog: React.FC = () => {
  const catalog = useSelector(state => state)

  console.log(catalog);
  

  return (
    <div>
      <h1>Ola</h1>
    </div>
  );
}

export { Catalog };
