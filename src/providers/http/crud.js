// import React, { useContext } from 'react';
import axios from 'axios';
import { baseTodoUrl } from '../../utils/constant';
// import { CrudSessionContext } from '../../providers/contexts/CrudSession';

export const getTodoList = (crudSession) => {

  const url = `${baseTodoUrl}${crudSession}/todos`;

  const options = {
    method: 'GET',
    timeout: 25000,
    url,
  };

  return axios(options)
}


export const addTodoList = (crudSession, title, description, date) => {

  const url = `${baseTodoUrl}${crudSession}/todos`;

  // syntatic sugar
  let form_data = {
    title,
    description,
    date
  }

  const options = {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json' 
    },
    timeout: 25000,
    data: JSON.stringify(form_data),
    url,
  };

  return axios(options)
}

export const updateTodoList = (crudSession, todoId, title, description, date) => {

  const url = `${baseTodoUrl}${crudSession}/todos/${todoId}`;

  // syntatic sugar
  let form_data = {
    title,
    description,
    date
  }

  const options = {
    method: 'PUT',
    headers: { 
      'Content-Type': 'application/json' 
    },
    timeout: 25000,
    data: JSON.stringify(form_data),
    url,
  };

  return axios(options)
}

export const deleteTodoList = (crudSession, todoId) => {

  const url = `${baseTodoUrl}${crudSession}/todos/${todoId}`;

  const options = {
    method: 'DELETE',
    headers: { 
      'Content-Type': 'application/json' 
    },
    timeout: 25000,
    url,
  };

  return axios(options)
}