import proptypes from 'prop-types';

UserGreeting.propTypes = {
    isLoggedIn: proptypes.bool,
    username: proptypes.string,
};
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: 'Guest',
}

function UserGreeting(props){
    const welcomeMessage =  <h1 className="welocome-meesage">Welcome back, {props.username}!</h1> ;
    const loginMessage = <h1 className="login-message"> please login to continue</h1>;
return(props.isLoggedIn ? welcomeMessage : loginMessage);
}

export default UserGreeting;