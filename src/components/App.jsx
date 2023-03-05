import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

import Phonebook from '../Modules/Phonebook/Phonebook';
// import { store, persistor } from '../redux/store';
import { store} from '../redux/store';


export function App() {
  return (
 
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <Phonebook />
        {/* </PersistGate> */}
      </Provider>

  );
}
