import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
  
export class App extends React.Component {

  state = {
    contacts: [
          {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
          {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
          {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
          {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter:'',
        // name: '',
        // number:'',
  }
  // formSubmitHandler = data => {
  //   console.log(data);
  // }
  AddContact = text => {
    //console.log(text);
    if (this.state.contacts.find(contact => contact.name === text.name)) {
      alert(`${text.name} is already in contacts`);
      return false;
    }
    const contact = {
      id: nanoid(),
      name: text.name,
      number: text.number,
    }
    this.setState(prevState => ({
      contacts: [contact,...prevState.contacts]
    }))
    return true;
  }
  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact=>contact.id !==contactId),
    }));
  }
  changeFilter = event => {
    this.setState({
      filter: event.currentTarget.value
    });
  }
    
  render() {
    const { filter } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
   // console.log(filter);
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.AddContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} onDeleteContact={ this.deleteContact} />
      </div>
    );
  }
};
