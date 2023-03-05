export const getAllContacts = ({ contacts }) => contacts.items;
export const getFilter = ({ filter }) => filter;
export const getFilterContacts = ({ contacts, filter }) => {
  if (!filter) return contacts.items;

  const filterLower = filter.toLowerCase();
  const contactsFilter = contacts.items.filter(({ name }) =>
    name.toLowerCase().includes(filterLower)
  );
  return contactsFilter;
};
