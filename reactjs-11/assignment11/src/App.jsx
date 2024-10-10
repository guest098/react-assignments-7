import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import './App.css';

const App=()=>{
  const [selectedAppointment,setSelectedAppointment]=useState(null);

  return(
    <Provider store={store}>
      <div className="App">
        <h2>Welcome to Gradious Doctor Appointment Booking</h2>
        <AppointmentForm
          selectedAppointment={selectedAppointment}
          setSelectedAppointment={setSelectedAppointment}
        />
        <AppointmentList onEditAppointment={setSelectedAppointment} />
      </div>
    </Provider>
  );
};

export default App;
