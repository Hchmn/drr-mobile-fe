import React from 'react';
import Router from './routes/Routes';
import { ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack}/>
      <ApplicationProvider {...eva} theme={eva.dark}>
        <Router/>
      </ApplicationProvider>
    </>

  );
};

export default App;
