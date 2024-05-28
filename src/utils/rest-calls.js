import { TRIPS_BASE_URL } from './consts';

export function GetTrips(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    let myInit = { method: 'GET',
        headers: headers,
        mode: 'cors'
    };
    let request = new Request(TRIPS_BASE_URL, myInit);

    console.log('Inainte de fetch GET pentru '+TRIPS_BASE_URL)

    return fetch(request)
        // .then(status)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        // .then(json)
        .then(data=> {
            console.log('Request succeeded with JSON response', data);
            return data;
        }).catch(error=>{
            console.log('Request failed', error);
            return Promise.reject(error);
        });
}

export function DeleteTrip(id){
    console.log('inainte de fetch delete')
    let myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    let antet = { method: 'DELETE',
        headers: myHeaders,
        mode: 'cors'
    };

    const tripDelUrl=TRIPS_BASE_URL+'/'+id;
    console.log('URL pentru delete   '+tripDelUrl)
    return fetch(tripDelUrl, antet)
        // .then(status)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            console.log('Delete status '+response.status);
            return response.text();
        }).catch(e=>{
            console.log('error '+e);
            return Promise.reject(e);
        });
}

export function AddTrip(trip){
    console.log('inainte de fetch post'+JSON.stringify(trip));

    let myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type","application/json");

    let antet = { method: 'POST',
        headers: myHeaders,
        mode: 'cors',
        body:JSON.stringify(trip)};

    return fetch(TRIPS_BASE_URL, antet)
        // .then(status)
        .then(response=>{
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        }).catch(error=>{
            console.log('Request failed', error);
            return Promise.reject(error);
        });
}

export function UpdateTrip(trip){
    console.log('inainte de fetch put'+JSON.stringify(trip));

    let myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type","application/json");

    let antet = { method: 'PUT',
        headers: myHeaders,
        mode: 'cors',
        body:JSON.stringify(trip)};

    const tripPutUrl=TRIPS_BASE_URL+'/'+trip.id;
    console.log('URL pentru put   '+tripPutUrl)
    return fetch(tripPutUrl, antet)
        // .then(status)
        .then(response=>{
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        }).catch(error=>{
            console.log('Request failed', error);
            return Promise.reject(error);
        });
}

export function FindTrip(id){
    console.log('inainte de fetch get'+id);

    let myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    let antet = { method: 'GET',
        headers: myHeaders,
        mode: 'cors'
    };

    const tripGetUrl=TRIPS_BASE_URL+'/'+id;
    console.log('URL pentru get   '+tripGetUrl)
    return fetch(tripGetUrl, antet)
        // .then(status)
        .then(response=>{
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        }).catch(error=>{
            console.log('Request failed', error);
            return Promise.reject(error);
        });
}