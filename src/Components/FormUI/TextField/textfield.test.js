import { render } from '@testing-library/react';
import TextField from './index';
import { Formik, Form } from 'formik';

test('TextField Renders without Error', () => {
  const { queryByTestId } = render(
    <Formik initialValues={{
      test: '',
    }}>
      <Form>
        <TextField name="test" />
      </Form>
    </Formik>
  );
  const component = queryByTestId('textfield');
  expect(component).toBeTruthy();
});
