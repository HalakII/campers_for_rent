import React from 'react';
import { ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import css from './DatePicker.module.css';
// import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DatePickerField = ({ field, form, ...rest }) => {
  const { name, value } = field;
  const { setFieldValue } = form;

  const handleChange = date => {
    setFieldValue(name, date);
  };

  return (
    <>
      <DatePicker
        wrapperClassName="datePicker"
        {...rest}
        selected={value}
        onChange={handleChange}
        dateFormat="yyyy-MM-dd"
      />
      <ErrorMessage className={css.error} name={name} component="span" />
    </>
  );
};

export default DatePickerField;
