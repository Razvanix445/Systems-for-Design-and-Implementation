import React, { useEffect } from 'react';
import { useState } from 'react';
import TripTable from './TripTable.jsx';
import './TripApp.css'
import TripForm from "./TripForm.jsx";
import { GetTrips, DeleteTrip, AddTrip, UpdateTrip, FindTrip } from './utils/rest-calls'

export default function TripApp() {
    const [trips, setTrips] = useState([]);
    const [editingTrip, setEditingTrip] = useState(null);
    const [searchedTrip, setSearchedTrip] = useState(null);

    function resetEditingTrip() {
        setEditingTrip(null);
    }

    function addFunc(trip) {
        console.log('inside add Func ' + trip);
        AddTrip(trip)
            .then(res => GetTrips())
            .then(trips => setTrips(trips))
            .catch(error => console.log('error add ', error));
    }

    function deleteFunc(id) {
        console.log('inside deleteFunc ' + id);
        DeleteTrip(id)
            .then(res => GetTrips())
            .then(trips => setTrips(trips))
            .catch(error => console.log('error delete', error));
    }

    function updateFunc(trip) {
        console.log('inside update Func ' + trip);
        UpdateTrip(trip)
            .then(res => GetTrips())
            .then(trips => setTrips(trips))
            .catch(error => console.log('error update ', error));
    }

    function findFunc(id) {
        console.log('inside findFunc ' + id);
        FindTrip(id)
            .then(trip => setSearchedTrip(trip))
            .catch(error => console.log('error find', error));
    }

    useEffect(() => {
        console.log('inside useEffect')
        GetTrips().then(trips => setTrips(trips));
    }, []);

    return (
        <div className="TripApp">
            <h1> Trip Management App </h1>
            <TripForm addFunc={addFunc} updateFunc={updateFunc} editingTrip={editingTrip || searchedTrip} resetEditingTrip={resetEditingTrip} />
            <br />
            <br />
            <TripTable trips={trips} deleteFunc={deleteFunc} findFunc={findFunc} />
        </div>
    );
}