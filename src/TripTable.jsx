import React from  'react';
import './TripApp.css'

function TripRow({trip, deleteFunc, findFunc}){
    function handleDelete(event){
        console.log('delete button pentru '+trip.id);
        deleteFunc(trip.id);
    }

    function handleFind(event){
        console.log('find button pentru '+trip.id);
        findFunc(trip.id);
    }

    return (
        <tr>
            <td>{trip.id}</td>
            <td>{trip.destination}</td>
            <td>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleFind}>Find</button>
            </td>
        </tr>
    );
}

export default function TripTable({trips, deleteFunc, findFunc}){
    console.log("In TripTable");
    console.log(trips);
    let rows = [];
    trips.forEach(function(trip) {
        rows.push(<TripRow trip={trip}  key={trip.id} deleteFunc={deleteFunc} findFunc={findFunc} />);
    });
    return (
        <div className="TripTable">

            <table className="center">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Destination</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>

        </div>
    );
}