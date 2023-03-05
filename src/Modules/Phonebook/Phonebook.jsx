import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import styles from './phonebook.module.scss';
import ContactForm from './ContactForm/ContactForm';
import FindContact from './FindContact/FindContact';
import Button from 'Modules/Button/Button';

import {
  fetchAllContacts,
  fetchAddContact,
  fetchDeleteContact,
} from '../../redux/contacts/contacts-operations';

import { getFilter } from '../../redux/filter/filter-selectors';
import { setFilter } from 'redux/filter/filter-slice';

import { getFilterContacts } from '../../redux/contacts/contacts-selectors';

const Phonebook = () => {
  const contactsFilter = useSelector(getFilterContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const handleAddContact = ({ name, phone }) => {
    //----------------------  add friends filter ???
    dispatch(fetchAddContact({ name, phone }));
  };

  const removeContact = id => {
    dispatch(fetchDeleteContact(id));
  };

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };
  console.log(filter);
  const elementsLi = contactsFilter.map(({ id, name, phone }) => (
    <li className={styles.li} key={id}>
      <div>
        {name} : {phone}
      </div>
      <Button removeContact={removeContact} id={id} />
    </li>
  ));
  const elements =
    elementsLi && elementsLi.length
      ? elementsLi
      : 'Sorry, there are no contacts in Phonebook';
  return (
    <>
      <div className={styles.div}>
        <h3 className={styles.mainTitle}>Phonebook</h3>
        <ContactForm onSubmit={handleAddContact} />

        <h3 className={styles.mainTitle}>Contacts</h3>
        <div className={styles.find}>
          <FindContact handleFilter={handleFilter} />
          <ul>{elements}</ul>
        </div>
      </div>
    </>
  );
};

export default Phonebook;
