import React from 'react';

function Searched({ searched }) {
  console.log(searched, 'from searched');
  return (
    <div>
      <div>{searched[0].carName}</div>
      <div>{searched[0].carBrand}</div>
      <div>{searched[0].carColor}</div>
      <div>{searched[0].carPower}</div>
      <div>{searched[0].carType}</div>
      <div>{searched[0].carPrice}</div>
      <img style={{ height: '250px' }} src={searched[0].carImage} />
    </div>
  );
}

export default Searched;
