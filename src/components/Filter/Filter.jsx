import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => (
    //console.log('sfdfd');
    <div>
        <label className={ css.labelFilter}>Find contacts by name:</label>
        <input type="text" name="filter" value={value} onChange={onChange} className={css.inputFilter} />
    </div>
);
Filter.propTypes = {

        value: PropTypes.string.isRequired,
        onChange: PropTypes.func,

}
export default Filter;