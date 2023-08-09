import React from 'react';
import PropTypes from 'prop-types';

function CalculatorButton({ label }) {
  return (
    <button type="button">
      {label}
    </button>
  );
}

CalculatorButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default CalculatorButton;
