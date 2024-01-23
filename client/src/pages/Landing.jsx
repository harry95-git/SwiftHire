import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import page1 from '../assets/images/page1.png';
import { Link } from 'react-router-dom';
import { Logo } from '../components';
import ReactTyped from "react-typed";
const Landing = () => {
  const style1={
    
  }
  return (
    <Wrapper>
      <nav>
        <Logo />
        
      </nav>
      <div style={{position:"absolute", top:"20px", right:"20px"}}>
      <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn '>
            Login
          </Link>
          </div>
      <div className='container page'>
        <div className='info'>
          <h1>
            WELCOME TO <span>SWIFTHIRE</span> 
          </h1>
          <p>
          Welcome to Swift Hire, the ultimate job finding app designed to accelerate your career journey. Swift Hire is not just another job search platform; it's your personalized career companion, offering a seamless and efficient experience for both job seekers and employers.
          </p>
          
             

       
              <ReactTyped strings={["Please Login/Register to continue..."]} typeSpeed={100} loop />


        </div>
        <img src={page1} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
