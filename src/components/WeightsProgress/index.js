import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import './style.scss';

const WeightsProgress = () => {
  const { state } = useContext(UserContext);
  const { weights } = state;

  let userWeights = [];
  for (let key in weights) {
    userWeights.push(
      <div key={key} className='weight'>
        <h4 className='weight__title'>{key}</h4>
        <button className='weight__edit'>Edit</button>
        <p className='weight__value'>
          current weight:{' '}
          <span className='weight__value weight__value--current'>{`${weights[key].current}Kg`}</span>
        </p>
        <p className='weight__value weight__value--last'>
          last weight: {`${weights[key].last}Kg`}
        </p>
        <a className='weight__stats' href='#'>
          Statistics
        </a>
      </div>
    );
  }

  return (
    <>
      <div className='weights'>
        {userWeights.length > 0 ? (
          userWeights
        ) : (
          <h4 className='heading-4'>Track your progress! Add new weight!</h4>
        )}
      </div>
    </>
  );
};

export default WeightsProgress;
