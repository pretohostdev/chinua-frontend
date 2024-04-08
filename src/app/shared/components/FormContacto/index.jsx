
import { useState } from 'react';
import { Button } from '../Button';
import { Container } from './styles';

// import { Container } from './styles';



function FormContacto() {


    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')


    const sendMessage=(evt)=>{
        evt.preventDefault()

        const data = {
            name: name,
            email: email,
            subject: subject,
            message: message
        }

        console.log(data)
    }

    return (
        <Container onSubmit={sendMessage}>
            <div className="form-input">
                <input type="text" placeholder='Digite o teu nome' value={name} onChange={(evt) => setName(evt.target.value)} required />
                <input type="email" placeholder='Digite o teu email' value={email} onChange={(evt) => setEmail(evt.target.value)} required />
            </div>
            <div className="form-input">
                <input type="text" placeholder='Digite o assunto' value={subject} onChange={(evt) => setSubject(evt.target.value)} required />
            </div>
            <div className="form-input">
                <textarea placeholder='Digite a mensagem' value={message} onChange={(evt) => setMessage(evt.target.value)} required></textarea>
            </div>
            <div className="form-input">
                <Button theme='secondary' type='submit'>Enviar</Button>
                <Button theme='primary' type='reset' >Cancelar</Button>
            </div>
        </Container>
    );
}

export default FormContacto;