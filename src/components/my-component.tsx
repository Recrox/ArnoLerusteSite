import React from 'react';
import { Props } from '../models/Props';

const MyComponent: React.FC<Props> = ({ title, content }) => {
  console.log(process.env.REACT_APP_API_URL);

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default MyComponent;
