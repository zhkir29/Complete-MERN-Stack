import logo from './logo.svg';
import './App.css';
import InputGroup from './components/inputGroup';
import Button from './components/Button';
function App() {
  return (
    <div style = {{
      width:'60%',
      margin: '2rem auto',
      backgroundColor:'#fff',
      padding: '2rem'
    }}>
      <div style = {{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        marginBottom: '1rem',
      }}>
        <h3 style={{
          fontFamily: 'Arial',
          fontSize: '1rem',
          color: '#666'
        }}>Sign Up</h3>
        <p style = {{
          fontFamily: 'Arial',
          fontSize : '1rem',
          color: '#666'
        }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
      <form>
        <InputGroup label = "What is your name" type = 'text' id = 'name'/>
        <InputGroup label = "What is your email" type = 'email' id = 'email'/>
        <InputGroup label = "What is your password" type ='password' id = 'password'/>
        <Button text = 'Reset' variant = 'red' size ='big' type = 'reset'/>
        <Button text ='Submit' variant ='blue' size = 'small' type = 'submit'/>
      </form>
    </div>
  );
}

export default App;
