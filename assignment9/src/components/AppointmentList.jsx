import React, { useState } from "react";
import maleProfile from '../images/prof.png';
import femaleProfile from '../images/female.avif';
const AppointmentList=({appointments,onEditAppointment,onDeleteAppointment})=>{
    const [showActions,setShowActions]=useState(null);
    const handleActionsClick=(index)=>{
        setShowActions(showActions===index?null:index);
    };
    const getDefaultProfileImage=(gender)=>{
        return gender==='Male'?maleProfile:femaleProfile;
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
                {appointments.length>0?(
                    appointments.map((appointment,index)=>(
                        <tr key={index}>
                            <td>
                                <div className="user-info">
                                <div className="user-info__img">
                                 <img src={appointment.profileImage||getDefaultProfileImage(appointment.gender)} alt="Profile"/>
                                </div>
                                <div>
                                     <span>{appointment.name}</span>
                                     <br/>
                                     <span>{appointment.age}&nbsp;yrs,&nbsp;{appointment.gender}</span>
                                </div>
                                </div>
                            </td>
                            <td>
                            <span className={appointment.status==='Consult'?'status-consult':'status-revisit'}>{appointment.status}</span>
                            </td>
                            <td>
                                <span>{appointment.time}</span><br />
                                <span>{appointment.date}</span>
                            </td>
                            <td className="phone">
                                 <span>{appointment.phone}</span><br />
                                 <a href={`tel:${appointment.phone}`}>Contact</a>
                            </td>
                            <td>{appointment.doctor}</td>
                            <td>
                            <div className="actions">
                                <button onClick={()=>handleActionsClick(index)} className="btn-1">&#x22EE;</button>
                                {showActions===index && (
                      <div className="action-menu">
                        <button onClick={()=>onEditAppointment(appointment)}>Update</button>
                        <button onClick={()=>onDeleteAppointment(index)}>Delete</button>
                      </div>
                      )}
                  </div>
                </td>
                </tr>
                    ))
                ):(
                    <tr>
                      <td colSpan="6">No appointments found</td>
                    </tr>
                  )}
            </tbody>
        </table>
       </div>
    );
}
export default AppointmentList;