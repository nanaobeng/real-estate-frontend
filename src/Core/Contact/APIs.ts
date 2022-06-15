import {API} from '../../config';


export const clientMessage = (values:any) => {
    const data = {
        values
    }
    return fetch (`${API}/client/message`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': "application/json"
           
        },
        body:JSON.stringify(data)
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};

