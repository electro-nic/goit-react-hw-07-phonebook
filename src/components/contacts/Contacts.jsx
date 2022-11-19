import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/operations';
import { getFilter, getItems } from '../../redux/selectors';
import { ListContacts, ListItem, ButtonDel } from './ContactsStyled';

const Contacts = () => {

  const filter = useSelector(getFilter);
  const items = useSelector(getItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contactFiltering = () => { 
    const normalizeFilter = filter.toLowerCase();
    return items.filter(item => item.name.toLowerCase().includes(normalizeFilter))
  };

  const filteredContacts = contactFiltering(); 


  return (
    <ListContacts>
      {filteredContacts.map(({ id, name, phone }) => 
        <ListItem key={id}>
          {name}: {phone}
          <ButtonDel type='button' onClick={() => {
                dispatch(deleteContact(id));
              }}>Delete</ButtonDel> 
        </ListItem>)
      }   
     
    </ListContacts>
  )   
}


export default Contacts;
