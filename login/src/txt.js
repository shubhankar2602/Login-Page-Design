const breakpoints = {
    xs: '480px',   // Extra small devices (e.g., phones)
    sm: '768px',   // Small devices (e.g., tablets)
    md: '992px',   // Medium devices (e.g., laptops)
    lg: '1200px',  // Large devices (e.g., desktops)
};



export const Title = styled.h1`
font-weight: bold;
margin: 0;
`;

export const Input = styled.input`
background-color: #eee;
border: none;
padding: 12px 15px;
margin: 8px 0;
width: 100%;
`;


export const Button = styled.button`
   border-radius: 20px;
   border: 1px solid #ff4b2b;
   background-color: #ff4b2b;
   color: #ffffff;
   font-size: 12px;
   font-weight: bold;
   padding: 12px 45px;
   letter-spacing: 1px;
   text-transform: uppercase;
   transition: transform 80ms ease-in;
   &:active{
       transform: scale(0.95);
   }
   &:focus {
       outline: none;
   }
`;
export const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 678px;
  min-height: 400px;

  @media (max-width: ${breakpoints.sm}) {
    max-width: 100%;
  }
`;

export const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;

  ${props => props.signinIn !== true ? css`
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  ` : null}

  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
  }
`;
export const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;

  ${props => (props.signinIn !== true ? css`transform: translateX(100%);` : null)}

  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
  }
`;

export const Form = styled.form`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;

  @media (max-width: ${breakpoints.sm}) {
    padding: 0 20px;
  }
`;

export const GhostButton = styled(Button)`
  background-color: transparent;
  border-color: #ffffff;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 10px;  // Adjust font size for smaller screens if necessary
  }
`;

export const Anchor = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 12px;  // Adjust font size for smaller screens if necessary
  }
`;

export const Overlay = styled.div`
  background: #ff416c;
  // Other styles here...

  ${props => (props.signinIn !== true ? css`transform: translateX(50%);` : null)}

  @media (max-width: ${breakpoints.sm}) {
    // Adjust styles for smaller screens here...
  }
`;

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;

  ${props => props.signinIn !== true ? css`transform: translateX(-100%);` : null}

  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
    left: 0;
  }
`;

export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;

  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
  }
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${props => props.signinIn !== true ? css`transform: translateX(0);` : null}

  @media (max-width: ${breakpoints.sm}) {
    transform: translateX(0);
  }
`;

export const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${props => props.signinIn !== true ? css`transform: translateX(20%);` : null}

  @media (max-width: ${breakpoints.sm}) {
    transform: translateX(0);
  }
`;


export const Paragraph = styled.p`
font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px
`;