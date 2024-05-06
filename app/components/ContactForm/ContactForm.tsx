'use client';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [error, setError] = useState('');
  const [isOk, setIsOk] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      setIsError(true);
      setError('Please provide inputs for all the fields.');
    } else {
      try {
        const response = await toast.promise(
          fetch('/api/send', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify({
              username: name,
              email: email,
              subject: subject,
              message: message,
            }),
          }),
          {
            pending: 'Sending your mail..!',
            success: `Hey ${name}! I got your mail.`,
            error: 'Error in sending mail. ',
          }
        );
        if (response.ok) {
          setIsOk(true);
          resetFormData();
        }
      } catch (error: any) {
        resetFormData();
        setError(error);
      }
    }
  };

  const resetFormData = () => {
    setEmail('');
    setIsError(false);
    setMessage('');
    setName('');
    setSubject('');
  };

  useEffect(() => {
    setIsError(false);
    setError('');
  }, [name, email, message, subject]);

  return (
    <motion.div
      className="bg-opacity-50 backdrop-blur-md backdrop-filter bg-white p-4 rounded-lg shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.5 }}
    >
      <Form className="flex flex-col items-center py-5" id="form">
        {isError && <h5 className="text-red-600">{error}</h5>}

        <Form.Group className="mb-3 w-4/5" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3 w-4/5" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3 w-4/5" controlId="formBasicSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3 w-4/5" controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Your Message.."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>

        <button
          className="bg-gray-300 hover:bg-white text-black font-bold py-2 px-4 rounded border-transparent hover:border-black border-2 mt-4"
          disabled={isError}
          onClick={handleSubmit}
        >
          {isOk ? 'Sent' : 'Send message'}
        </button>
      </Form>
    </motion.div>
  );
};

export default ContactForm;
