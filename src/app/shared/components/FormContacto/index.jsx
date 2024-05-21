
import { useState } from 'react';
import { Button } from '../Button';
import { Container } from './styles';
import  emailJS from "@emailjs/browser"

// import { Container } from './styles';


function FormContacto() {


    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
  

    const Mailto = ({ email, subject = '', body = '', children }) => {
        let params = subject || body ? '?' : '';
        if (subject) params += `subject=${encodeURIComponent(subject)}`;
        if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
      
        return <a href={`mailto:${email}${params}`}>{children}</a>;
      };
      
      
      
      
    const sendMessage= async (evt)=>{
        evt.preventDefault()

        const data = {
            name: name,
            email: email,
            subject: subject,
            message: message
        }
        const templateParams={
            from_name:name,
            subject:subject,
            message:message,
            email:email
        }

      await  emailJS.send("service_asx2yah","template_tgyg156",templateParams,{publicKey:"DRQp1ZAR-jd3A6DKp"})
        .then((response)=>alert("Email enviado",response.status,response.text))
        .catch((error)=>console.log({message:"erro ao enviar email",messageError:error}))
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
                <Mailto email="franciscojoaopedro1998@gmail.com" subject="Hello & Welcome" body="Hello world!">
          Mail me!
        </Mailto>
            </div>
        </Container>
    );
}

export default FormContacto;