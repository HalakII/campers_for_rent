import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePickerField from '../DataPicker/DatePicker';

import 'react-datepicker/dist/react-datepicker.css';
import css from './BookForm.module.css';

const UserSchema = Yup.object().shape({
  username: Yup.string()
    .trim()
    .min(3, 'Min 3 chars!!!')
    .required('Is required!!!'),
  email: Yup.string()
    .email('Must be a valid email!')
    .required('Is required!!!'),
  date: Yup.date()
    .required()
    .min(new Date(), 'The date should be in the future'),
  comment: Yup.string().max(256, 'Max 256 chars!!!').required('Is required!!!'),
});

export default function BookForm() {
  const handleSubmit = (values, actions) => {
    console.log('handleSubmit', values);
    actions.resetForm();
  };

  return (
    <div className={css.formBox}>
      <div>
        <h3 className={css.formTitle}>Book your campervan now</h3>
        <p className={css.formText}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <Formik
        initialValues={{
          username: '',
          email: '',
          date: new Date(),
          comment: '',
        }}
        validationSchema={UserSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.group}>
            <Field className={css.input} name="username" placeholder="Name" />
            <ErrorMessage
              className={css.error}
              name="username"
              component="span"
            />
          </div>
          <div className={css.group}>
            <Field
              className={css.input}
              type="email"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage className={css.error} name="email" component="span" />
          </div>
          <div className={css.group}>
            <Field name="date" component={DatePickerField} />
          </div>
          <div className={css.group}>
            <Field
              className={css.textarea}
              as="textarea"
              name="comment"
              placeholder="Comment"
            />
            <ErrorMessage
              className={css.error}
              name="comment"
              component="span"
            />
          </div>

          <button className={css.button} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
}
