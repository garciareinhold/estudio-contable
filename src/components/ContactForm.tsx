import { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../config/theme';
import emailjs from '@emailjs/browser';

const FormContainer = styled.div`
  background: ${theme.colors.background};
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(44, 62, 80, 0.10);
  padding: 2.5rem 2rem;
  max-width: 500px;
  width: 100%;
`;

const FormTitle = styled.h2`
  color: ${theme.colors.primary};
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  font-family: ${theme.fonts.heading};
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: ${theme.colors.text};
  font-weight: 500;
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 2px solid ${theme.colors.lightGray};
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color ${theme.transitions.default};
  font-family: ${theme.fonts.main};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }

  &::placeholder {
    color: ${theme.colors.darkGray};
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 2px solid ${theme.colors.lightGray};
  border-radius: 8px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: border-color ${theme.transitions.default};
  font-family: ${theme.fonts.main};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }

  &::placeholder {
    color: ${theme.colors.darkGray};
  }
`;

const SubmitButton = styled.button`
  background: ${theme.colors.primary};
  color: ${theme.colors.background};
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color ${theme.transitions.default};
  margin-top: 1rem;

  &:hover {
    background: ${theme.colors.secondary};
  }

  &:disabled {
    background: ${theme.colors.darkGray};
    cursor: not-allowed;
  }
`;

const Message = styled.div<{ $type: 'success' | 'error' }>`
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  text-align: center;
  font-weight: 500;
  background: ${({ $type }) => $type === 'success' ? '#d4edda' : '#f8d7da'};
  color: ${({ $type }) => $type === 'success' ? '#155724' : '#721c24'};
  border: 1px solid ${({ $type }) => $type === 'success' ? '#c3e6cb' : '#f5c6cb'};
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      // EmailJS configuration
      await emailjs.send(
        'service_08jj1sf',
        'template_wrt99hp',
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          message: formData.message,
          to_email: 'santi.liset@hotmail.es'
        },
        'LH-XfnxRwsElOxQZu'
      );

      setMessage({
        type: 'success',
        text: '¡Mensaje enviado con éxito! Te contactaremos pronto.'
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Error al enviar el mensaje. Por favor, intenta nuevamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContainer>
      <FormTitle>Envíanos un mensaje</FormTitle>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Nombre completo *</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre completo"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="phone">Teléfono</Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+54 9 249 466-3899"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="message">Mensaje *</Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Cuéntanos en qué podemos ayudarte..."
            required
          />
        </FormGroup>

        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
        </SubmitButton>

        {message && (
          <Message $type={message.type}>
            {message.text}
          </Message>
        )}
      </Form>
    </FormContainer>
  );
};

export default ContactForm; 