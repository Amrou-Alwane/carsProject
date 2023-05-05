import React from 'react';
import CarInfo from './CarInfo';
import { useNavigate } from 'react-router-dom';

function Home({ data, update, deleteCar }) {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate('/add')}>ADD</button>
      <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifycontent: 'center' ,height: '600px'}}>
        {data.map((car) => (
          <CarInfo car={car} update={update} deleteCar={deleteCar} />
        ))}
      </div>
    </>
  );
}

export default Home;

