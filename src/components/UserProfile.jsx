import React from 'react';
import '../App.css';
import logo from '../logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';

import { useGetUsersQuery } from '../services/userApi';

export const UserProfile = () => {
    // const { data, isFetching } = useGetUsersQuery();
    // let userNameData = data?.[0].name;

    // if (isFetching) return 'Loading...';

    return (
        <p className='user__name'>userName</p> 
    )
}