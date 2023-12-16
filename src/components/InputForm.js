import React, { useContext, useRef } from 'react';
import './InputForm.css';
import cartContext from '../store/cartContext';

export const InputForm = () => {
    const ctx = useContext(cartContext)
    const nameRef = useRef('')
    const desRef = useRef('')
    const priceRef = useRef('')
    const submitHandler = (e) => {
        e.preventDefault();
        const enteredName = nameRef.current.value
        const enteredDes = desRef.current.value
        const enteredPrice = priceRef.current.value
        const data = {
            id: Math.random().toString(),
            name: enteredName,
            desc: enteredDes,
            price: enteredPrice
        };
        ctx.addItem({...data})
        
    }
  return (
    <section className='form'>
        <form>
            <div className='control'>
                <label htmlFor='name'>Name: </label>
                <input type='text' id='name' ref={nameRef} />
            </div>
            <div className='control'>
                <label htmlFor='descp'>Description: </label>
                <textarea id='descp' rows={3} ref={desRef}/>
            </div>
            <div className='control'>
                <label htmlFor='price'>Price: </label>
                <input type='number' id='price' ref={priceRef}/>
            </div>
            <button onClick={submitHandler} type='submit'>Add Item</button>
        </form>
    </section>
  )
};

export default InputForm;
