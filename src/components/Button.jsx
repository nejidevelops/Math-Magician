import React from 'react';
import PropTypes from 'prop-types';

function CalculatorButton({ label, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  );
}

CalculatorButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default CalculatorButton;
