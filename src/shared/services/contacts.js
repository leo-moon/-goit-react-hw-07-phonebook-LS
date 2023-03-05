import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://6401b864ab6b7399d0aac6a5.mockapi.io/api/phonebook',
});

export const fetchContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};

export const addContact = async data => {
  const { data: result } = await contactsInstance.post('/', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = await contactsInstance.delete(`/${id}`);
  return data;
};
