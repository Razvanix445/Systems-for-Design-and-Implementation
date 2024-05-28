import React, { useState, useEffect } from 'react';

export default function TripForm({ addFunc, updateFunc, editingTrip, resetEditingTrip }) {
    const [destination, setDestination] = useState('');
    const [dateDeparture, setDateDeparture] = useState('');
    const [noOfAvailableSeats, setNoOfAvailableSeats] = useState('');

    useEffect(() => {
        if (editingTrip) {
            setDestination(editingTrip.destination);
            let date = new Date(editingTrip.dateDeparture);
            let formattedDate = date.toISOString().split('T')[0];
            setDateDeparture(formattedDate);
            setNoOfAvailableSeats(editingTrip.noOfAvailableSeats);
        }
    }, [editingTrip]);

    function handleAdd(event) {
        event.preventDefault();
        let trip = {
            destination: destination,
            dateDeparture: dateDeparture + 'T00:00:00',
            noOfAvailableSeats: noOfAvailableSeats
        }
        console.log('A trip was submitted: ');
        console.log(trip);
        addFunc(trip);
    }

    function handleUpdate(event) {
        event.preventDefault();
        let trip = {
            id: editingTrip.id,
            destination: destination,
            dateDeparture: dateDeparture + 'T00:00:00',
            noOfAvailableSeats: noOfAvailableSeats
        }
        console.log('A trip was updated: ');
        console.log(trip);
        updateFunc(trip);
    }

    function handleReset(event) {
        setDestination('');
        setDateDeparture('');
        setNoOfAvailableSeats('');
        resetEditingTrip();
    }

    return (
        <form>
            <label>
                Destination:&nbsp;
                <input type="text" value={destination} onChange={e => setDestination(e.target.value)} />
            </label><br />
            <label>
                Date Departure:&nbsp;
                <input type="date" value={dateDeparture} onChange={e => setDateDeparture(e.target.value)} />
            </label><br />
            <label>
                No of Available Seats:&nbsp;
                <input type="text" value={noOfAvailableSeats} onChange={e => setNoOfAvailableSeats(e.target.value)} />
            </label><br />

            <button type="button" onClick={handleAdd} className="button">Add Trip</button>
            {editingTrip && <button type="button" onClick={handleUpdate} className="button">Update Trip</button>}
            <button type="button" onClick={handleReset} className="button">Reset data</button>
        </form>
    );
}