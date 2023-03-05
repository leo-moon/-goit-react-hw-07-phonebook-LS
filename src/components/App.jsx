import { Provider } from 'react-redux';

import Phonebook from '../Modules/Phonebook/Phonebook';
import { store } from '../redux/store';

export function App() {
  return (
    <Provider store={store}>
      <Phonebook />
    </Provider>
  );
}
