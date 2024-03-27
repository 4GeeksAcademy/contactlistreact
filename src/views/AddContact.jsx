import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../store/AppContext'

const AddContact = () => {

    const { store, actions} = useContext(Context)
    
    const navigate = useNavigate()
    const [contacto, setContacto] = useState({
        full_name: '',
        email: '',
        agenda_slug: 'CarlosEduardo',
        address: '',
        phone: ''
    })

    return (
        <>
            <div>Add New Contact</div>
            <form onSubmit={(ev) => {
                ev.preventDefault();

            actions.addContact(contacto);
                
                

            }}>
                <label for="name">Full Name</label> <br />
                <input type="text" id='name' value={contacto.full_name} placeholder='Full Name' onChange={(ev) => setContacto({ ...contacto, full_name: ev.target.value })} /> <br />
                <label for="email">Email</label><br />
                <input type="text" id='email' value={contacto.email} placeholder='Enter Email' onChange={(ev) => setContacto({ ...contacto, email: ev.target.value })} /> <br />
                <label for="phone">Phone Number</label> <br />
                <input type="text" id='phone' value={contacto.phone} placeholder='Enter Phone' onChange={(ev) => setContacto({ ...contacto, phone: ev.target.value })} /> <br />
                <label for="address">Address</label> <br />
                <input type="text" id='address' value={contacto.address} placeholder='Enter Address' onChange={(ev) => setContacto({ ...contacto, address: ev.target.value })} /> <br />
                <button className='btn btn-primary' type='submit'>Crear Contacto</button>
            </form>
            <button className="btn btn-warning" onClick={() => navigate('/')}>Regresar</button>
        </>
    )
}

export default AddContact