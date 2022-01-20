import axios from 'axios';
import { baseUserUrl } from '../../utils/constant';

export const registerUser = (name, email, password) => {

  const url = baseUserUrl + 'api/authaccount/registration';

  // syntatic sugar
  let form_data = {
    name,
    email,
    password
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


export const login = (email, password) => {

  const url = baseUserUrl + 'api/authaccount/login';

  let form_data = {
    email,
    password
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