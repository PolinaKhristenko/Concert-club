import React, { useState, useEffect } from 'react';
import '../App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { useParams } from "react-router-dom";

import { useGetUserIdQuery, useGetPostsQuery, useGetCommentsQuery } from '../services/userApi';

