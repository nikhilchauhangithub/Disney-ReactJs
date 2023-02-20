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




export default Login;