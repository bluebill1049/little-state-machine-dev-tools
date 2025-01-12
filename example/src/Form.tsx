import * as React from 'react';
import { updateFirstLastName } from './actions/yourDetails';
import {useForm} from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';

const Form: React.FC = () => {
  const { handleSubmit, register } = useForm();
  const { state, actions } = useStateMachine({ actions: {updateFirstLastName} });

  const onSubmit = (data: any) => {
    actions.updateFirstLastName({
      ...data,
      // @ts-ignore
      submitCounter: state.yourDetails.submitCounter + 1,
    });
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First name:</label>
        <input
          placeholder="First name"
          {...register('firstname')}
          // @ts-ignore
          defaultValue={state && state.yourDetails.firstname}
        />
        <label>Last name:</label>
        <input
          placeholder="Last name"
          {...register('lastname')}
          // @ts-ignore
          defaultValue={state && state.yourDetails.lastname}
        />
        <input type="submit" />
      </form>
    </section>
  );
};

export default Form;
