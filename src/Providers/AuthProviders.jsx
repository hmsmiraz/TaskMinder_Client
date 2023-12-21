import { createContext } from "react";
import app from "../Firebase/Firebase.config"

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({children}) => {
    return (
        <div>
            
        </div>
    );
};

export default AuthProviders;