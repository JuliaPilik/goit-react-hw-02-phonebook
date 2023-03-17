import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import PropTypes from 'prop-types';


const ContactList = ({ contacts,onDeleteContact }) => (
    <ul>
        {contacts.map(({ id, name, number }) => (

            // <li key={id}>
            //     <span>{name}: {number}</span>
            //     <button onClick={()=>onDeleteContact(id)}>Delete</button>
            // </li>
            <ContactItem id={id} name={name} number={number} onDeleteContact={onDeleteContact} />
        ))}
    </ul>
);
ContactList.propTypes = {

    contacts:PropTypes.array.isRequired,

//         PropTypes.exact({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//   }),
    onDeleteContact: PropTypes.func,

}
export default ContactList;