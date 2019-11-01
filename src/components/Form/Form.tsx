import React from 'react';

type Props = {
  value: string | number;
  label: string;
  onChange(): string | number;
};

const Form = ({ value, onChange, label }: Props) => {
  return (
    <>
      <div className="input__box">
        <input
          className="form__input"
          name="title"
          type="text"
          value={value}
          onChange={onChange}
          required
        />
        <span className="highlight" />
        <span className="bar" />
        <label>{label}</label>
      </div>
    </>
  );
};

export default Form;
