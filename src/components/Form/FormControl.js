import React from 'react';
import { Link } from 'react-router-dom';

function FormControl() {
  return (
    <div className="form-control-bar">
      <Link
        to="/preview"
        className="button main"
        style={{ marginLeft: 'auto' }}
      >
        Submit
      </Link>
    </div>
  );
}

export default FormControl;
