import Container from './components/Container';
import ContactForm from './components/FormContacts';
import Filter from './components/Filter';
import ContactList from './components/ListContacts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer />
    </Container>
  );
}

export default App;
