import React from 'react';

const Dummy = (props) => {
  return (
      <div className="container">
        <h2>Dummy {props.label}</h2>
      </div>
  );
};
Dummy.propTypes = {label: React.PropTypes.string};
Dummy.fixtures = [
  {
    label: 'State 1'
  },
  {
    label: 'State 2',
  },
];

export default Dummy;
