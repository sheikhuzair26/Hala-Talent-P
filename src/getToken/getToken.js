import axios from 'axios';

export const getToken = () => {
    return(
        axios.post('http://hala.brotherint.com/api/auth/login', {
      email: 'aliraza@hot.com',
      password: 123,
      headers : {
        'Content-Type': 'application/json',
      }
    })
    .then(res => {
     return res
    })
     .catch(err =>{ 
         return err
        })


    )
}
  
