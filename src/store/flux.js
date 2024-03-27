const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [
                {
                    id: 1,
                    full_name: 'John Doe',
                    email: 'john.doe@gmail.com',
                    agenda_slug: 'MyAgenda',
                    address: 'Av. Vitacura',
                    phone: '+56955555555'
                }
            ]
        },
        actions: {
            getContacts: () => {
                fetch('https://playground.4geeks.com/apis/fake/contact/agenda/CarlosEduardo')
                    .then(response => response.json())
                    .then(datos => setStore({ contacts: datos }))
            },
            addContact: async (contacto) => {
                    try {
                        console.log(contacto)
                        const raw = JSON.stringify(contacto) // no detecta la variable de todoInput
                        const url = `https://playground.4geeks.com/apis/fake/contact/`;
                        const options = {
                            method: 'POST',
                            body: raw,
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }
            
                        const response = await fetch(url, options)
                        const data = await response.json()
                        console.log(data);
                        getActions().getContacts()
                    }
                    catch (error) {
                        console.log(error.msg)
                    }
                },
            deleteContact: async (contact_id) => {
                try {
                    const url = 'https://playground.4geeks.com/apis/fake/contact/'+contact_id;
                    const options = {
                        method: 'DELETE',
        
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
        
                    const response = await fetch(url, options)
                    const data = await response.json()
                    console.log(data);
                    getActions().getContacts()
                }
                catch (error) {
                    console.log(error.msg)
                }
            },
            editContact: async (contacto , contact_id) => {
                try {
                    console.log(contacto)
                    const raw = JSON.stringify(contacto) // no detecta la variable de todoInput
                    const url = `https://playground.4geeks.com/apis/fake/contact/`+contact_id;
                    const options = {
                        method: 'PUT',
                        body: raw,
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
        
                    const response = await fetch(url, options)
                    const data = await response.json()
                    console.log(data);
                    getActions().getContacts()
                }
                catch (error) {
                    console.log(error.msg)
                }
            },
            getOneContact: (contact_id) => {
                fetch('https://playground.4geeks.com/apis/fake/contact/'+contact_id)
                    .then(response => response.json())
                    .then(datos => setStore({ contacts: datos }))
            },

            
        }
    }
}

export default getState