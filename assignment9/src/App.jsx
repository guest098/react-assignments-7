import React, { useState } from 'react';
import './App.css';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
const App = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const addOrUpdateAppointment = (appointment, isUpdate) => {
    if (isUpdate) {
      setAppointments((prevAppointments) =>
        prevAppointments.map((app) =>
          app === selectedAppointment ? appointment : app
        )
      );
    } else {
      setAppointments([...appointments, appointment]);
    }
    setSelectedAppointment(null);
  };

  const editAppointment = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const deleteAppointment = (index) => {
    setAppointments(appointments.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <AppointmentForm
        onAddOrUpdateAppointment={addOrUpdateAppointment}
        selectedAppointment={selectedAppointment}
      />
      <AppointmentList
        appointments={appointments}
        onEditAppointment={editAppointment}
        onDeleteAppointment={deleteAppointment}
      />
    </div>
  );
};

export default App;
