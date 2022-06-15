import {API} from '../../../../config';


export const addDeveloperAvailableProperty = (values:any) => {
    
    return fetch (`${API}/admin/tracking/add/developers/available`, {
        method: "POST",
        headers: {
            Accept: 'application/json'
           
        },
        body:values
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};


export const getAllDeveloperAvailableProperties = () => {
    return fetch (`${API}/admin/tracking/get/developers/available/`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};


export const deleteDevelopersAvailableProperty = (id:number) => {
    return fetch(`${API}/admin/tracking/delete/developers/available/${id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const updateAvailableProperty = ( id:number,values:any) => {
    return fetch(`${API}/admin/tracking/update/developers/available/${id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json'
        },
        body: values
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};