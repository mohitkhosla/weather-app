import React from 'react';

const Form = props => (
  <form onSubmit={props.getWeather}>
    <input className="col-12" type="text" name="city" placeholder="City..." />
    <input className="col-12" type="text" name="country" placeholder="Country..." />
    <button className="col-12">Get Weather</button>
  </form>
);

export default Form;
