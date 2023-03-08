
import { useState } from 'react';
import css from './SearchBar.module.css'

export const SearchBar = ({onSubmit}) => {
    
     const [query, setQuery] = useState('');
    
     const handleSubmit =(e)=> {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  }
   
    const handleInputValue = (e) => {
       setQuery(e.target.value) 
    }
   
    return (
        <>
            <form
                className={css.form}
                onSubmit={handleSubmit}>
                <input
                    className={css.input}
                    onChange={handleInputValue} type="text" />
                <button
                    className={css.formBtn}
                    type="submit">Search</button>
            </form>
           
        </>
    )

}