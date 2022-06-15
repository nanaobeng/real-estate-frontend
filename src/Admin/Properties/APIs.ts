import {API} from '../../config';

export const countListings = () => {
    return fetch (`${API}/listings/count`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
}


export const getListings = () => {
    return fetch(`${API}/listings`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};


export const deleteListing = (id:number,token:any) => {
    return fetch(`${API}/admin/listing/${id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            jwt_token: `${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getListing = (id:number) => {
    return fetch(`${API}/listing/${id}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const getImages = (id:number) => {
    return fetch (`${API}/listing/images/${id}`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};

export const deleteListingImage = (token:any, id:any) => {
    return fetch(`${API}/admin/listing/image/${id}`, {
        method: 'DELETE',
        headers: { 
            Accept: 'application/json',
            jwt_token: `${token}`
        },
        body: id
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};
export const updateListing = (token:any, id:any) => {
    return fetch(`${API}/admin/listing/update/${id}`, {
        method: 'PUT',
        headers: { 
            Accept: 'application/json',
            jwt_token: `${token}`
        },
        body: id
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const addListing = (token:any, listing:any) => {
    return fetch(`${API}/admin/listing/add`, {
        method: 'POST',
        headers: { 
            Accept: 'application/json',
            jwt_token: `${token}`
        },
        body: listing
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};
