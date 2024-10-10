import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAppointment } from '../redux/actions/appointmentActions';
import photo1 from '../images/prof.png';
import photo2 from '../images/female.avif';
const AppointmentList=({ onEditAppointment }) => {
  const appointments = useSelector((state) => state.appointments);
  const dispatch = useDispatch();
  const [showActions, setShowActions] = useState(null);

  const handleDelete = (id) => {
    dispatch(deleteAppointment(id));
  };

  const handleActionsClick = (index) => {
    setShowActions(showActions === index ? null : index);
  };

 const defaultImages = {
    male: photo1,
    female: photo2, 
  };

  return (
    <div className="appointment-list">
      <table>
        <thead>
          <tr>
            <th>Patient</th>
            <th>Status</th>
            <th>Appointment</th>
            <th>Phone</th>
            <th>Doctor</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.length > 0 ? (
            appointments.map((appointment, index) => (
              <tr key={appointment.id}>
                <td>
                  <div className="patient-info">
                    <img
                      src={appointment.gender === 'Male' ? defaultImages.male : defaultImages.female}
                      alt={appointment.gender}
                      className="patient-image"
                    />
                    <div>
                      <strong>{appointment.name}</strong><br />
                      {appointment.age} yrs, {appointment.gender}
                    </div>
                  </div>
                </td>
                <td>
                  <span className={`status-${appointment.status.toLowerCase()}`}>{appointment.status}</span>
                </td>
                <td>{appointment.date} {appointment.time}</td>
                <td>{appointment.phone}</td>
                <td>{appointment.doctor}</td>
                <td>
                  <div className="actions">
                    <button onClick={() => handleActionsClick(index)}> &#x22EE; </button>
                    {showActions === index && (
                      <div className="action-menu">
                        <button onClick={() => onEditAppointment(appointment)}>Update</button>
                        <button onClick={() => handleDelete(appointment.id)}> Delete</button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No appointments found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentList;
