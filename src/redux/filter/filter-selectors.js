export const getFilter = ({ filter }) => filter;
export const getFilterContacts = ({ filter, contacts }) => {
  if (!filter) return contacts;
  const filterLower = filter.toLowerCase();
  const contactsFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterLower)
  );
  return contactsFilter;
};
