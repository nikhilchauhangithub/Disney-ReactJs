// import styled from 'styled-components';

import LogoOne from "./LogoOne";
import PosterImage from "./BGimage";
import SignupButton from "./SignupButton";
import Description from "./Description";
import LogoTwo from "./LogoTwo";



const Login = (props) => {
  return (
    <section className="section">
      <div className="content">
      
        <div className="cta">
          <LogoOne/>
<SignupButton />
<Description/>
<LogoTwo/>
          </div>
          <PosterImage />
          </div>
      
    </section>
  );
};


// const Container = styled.section`
// overflow:hidden;
// display:flex;
// flex
// `

// const Content = styled.div`
// `


export default Login;