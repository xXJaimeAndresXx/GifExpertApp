import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [InputValue, setInputValue] = useState('');

    const handleInputChange= (e)=>{
        console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (InputValue.trim().length>2){
            setCategories(c=> [InputValue,...c]);
            setInputValue('');

        }
        
        console.log('Submit hecho');

    }

    return (
        
            <form onSubmit= {handleSubmit}>
                
                {/* <h2>Add Category</h2> */}
                <input type= "text" value= {InputValue} onChange={handleInputChange}>

                </input>
            </form>
        
    )
}

AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired
}
