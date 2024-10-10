import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addAppointment, updateAppointment } from '../redux/actions/appointmentActions';
import { v4 as uuidv4 } from 'uuid';
const AppointmentForm=({selectedAppointment,setSelectedAppointment})=>{
  const [appointment,setAppointment]=useState({
    name:'',
    phone:'',
    doctor:'',
    gender:'Male',
    age:'',
    date:'',
    time:'',
    status:'Consult',
  });
  const [isUpdate,setIsUpdate]=useState(false);
  const dispatch=useDispatch();
  useEffect(()=>{
    if(selectedAppointment){
      setAppointment(selectedAppointment);
      setIsUpdate(true);
    }
  },[selectedAppointment]);
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setAppointment({ ...appointment,[name]:value});
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(isUpdate){
      dispatch(updateAppointment(appointment));
    }
    else{
      dispatch(addAppointment({...appointment, id: uuidv4()}));
    }
    setAppointment({
      name: '',
      phone: '',
      doctor: '',
      gender: 'Male',
      age: '',
      date: '',
      time: '',
      status: 'Consult',
    });
    setIsUpdate(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <input type="text" name="name" value={appointment.name} onChange={handleChange} placeholder="Patient Name *" required/>
        <select name="gender" value={appointment.gender} onChange={handleChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="form-row">
      <input type="text" name="age" value={appointment.age} onChange={handleChange} placeholder="Age *" required/>
      <input type="text" name="phone" value={appointment.phone} onChange={handleChange} placeholder="Phone Number *" required/>
      </div>
      <div className="form-row">
        <input type="text" name="doctor" value={appointment.doctor} onChange={handleChange} placeholder="Doctor Name *" required/>
        <select name="status" value={appointment.status} onChange={handleChange}>
          <option value="Consult">Consult</option>
          <option value="Revisit">Revisit</option>
        </select>
      </div>
      <div className="form-row">
        <input type="date" name="date" value={appointment.date} onChange={handleChange} required/>
        <input type="time" name="time" value={appointment.time} onChange={handleChange} required/>
      </div>
      <button type="submit">
        {isUpdate ? 'Update Appointment':'Book Appointment'}
      </button>
    </form>
  );
};

export default AppointmentForm;
