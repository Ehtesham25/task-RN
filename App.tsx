import React from 'react';

import Tab from './src/screens/components/Tab';
import Form from './src/screens/Form';
import {ContextProvider} from './src/context';

export default function App() {
  const [state, setState] = React.useState('Hooks');
  const [formValue, setFormValue] = React.useState();
  return (
    <>
      <ContextProvider>
        <Form state={state} formValue={formValue} setFormValue={setFormValue} />
        <Tab setState={setState} state={state} />
      </ContextProvider>
    </>
  );
}
