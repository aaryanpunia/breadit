import { Navigate } from "react-router-dom";
const Protected = ({ user, children }) => {
    console.log(user.loggedIn);

    if (!user.loggedIn) {
        return <Navigate to="/signupfailed" replace />;
    }

    return children;

};

export default Protected;