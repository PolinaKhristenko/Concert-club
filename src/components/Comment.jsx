import React, { useState }  from 'react';
import '../App.css';
import { usePostCommentsMutation } from '../services/userApi';


const Comment = ({active, setActive}) => {

const [ postComment ] = usePostCommentsMutation();

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [comment, setComment] = useState('');

const [error, setError] = useState('');

const handlePostComment = async () => {
    if (name && email && comment) {
        await postComment({
            name: name,
            email: email,
            comment: comment,
        });
        setComment(''); 
        setEmail('');
        setName('');
        setError(false);
    } else {
        setError('Пожалуйста, заполните все поля!');
    }
}


    return (
        <div className='form__body'>
            <fieldset className={active ? "form active" : "form"}>
                {error && (
                <p className="error__txt"> {error} </p>)}
                <input type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Имя'
                className={error ? "input error" : "input"}/>

                <input type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Почта'
                className={error ? "input error" : "input"}/>

                <input type='text'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder='Ваш комментарий'
                className={error ? "input error" : "input"}/>

                <a className='form__close' onClick={() => setActive(false)}>&times;</a>  
                <button className='btn__black' onClick={handlePostComment}>Отправить</button>              
            </fieldset>

        </div>
    )
}

export default Comment;
