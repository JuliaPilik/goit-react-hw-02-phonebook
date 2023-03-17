import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

class ContactForm extends React.Component { 
    state = {
        name: '',
        number:''
    }
      handleInputChange = event => {
    //console.log(event.currentTarget.value);
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    })
    }
     handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
       if (this.props.onSubmit(this.state)) {
         this.reset();
       }
    }
    reset = () => {
        this.setState({ name: '', number: '' });
    }
    render() {

        return (
          <form onSubmit={this.handleSubmit} className={ css.form}>
            <label className={ css.label}>
              Name:
            </label>
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={this.state.name}
                onChange={ this.handleInputChange}
                className={css.contactInput}
            />
        
          <label className={ css.label}>
              Number:
          </label>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleInputChange}
              className={css.contactInput}
            />
            
            <button type="submit" className={ css.contactButton}>Add contact</button>
        </form>
    )
    }
}

ContactForm.propTypes = {
  onSubmit:PropTypes.func
}

export default ContactForm;