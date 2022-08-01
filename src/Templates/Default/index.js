import React from 'react';
import Header from '../../Components/Header';

const DefaultTemplate = (props) => {
  return (
    <div data-testid="defaultTemplate">
      <Header />
      {props.children}
    </div>
  );
};

export default DefaultTemplate;
