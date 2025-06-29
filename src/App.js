import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // basic styling
import './App.css'; // optional: your own styling

function App() {
  const [date, setDate] = useState(new Date());

  const handleChange = newDate => {
    setDate(newDate);
  };

  return (
    <div className="App">
      <header>
        <h1>📅 Reservation Date</h1>
      </header>
      <main>
        <Calendar
          onChange={handleChange}
          value={date}
        />
        <p>
          You selected: <strong>{date.toDateString()}</strong>
        </p>
        <button onClick={() => alert(`You picked ${date.toDateString()}`)}>
          Continue
        </button>
      </main>
    </div>
  );
}

export default App;

