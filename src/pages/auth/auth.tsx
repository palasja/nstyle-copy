import './auth.css';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useContext } from 'react';
import { isAdminByEmail } from '../../../db/operations';
import { UserContext } from '../../context/UserContext';

const Auth = () => {
  const { isAuth, toggleAuth } = useContext(UserContext);
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      axios
        .get<{ email: string }>(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${codeResponse.access_token}`,
              Accept: 'application/json',
            },
          }
        )
        .then(async (res) => {
          const auth = await isAdminByEmail(res.data.email);
          toggleAuth(auth);
        })
        .catch((err) => console.log(err));
    },
    onError: (error) => console.log('Login Failed:', error),
  });

  return (
    <div className="auth">
      {!isAuth ? (
        <button onClick={() => login()}>Sign in with Google 🚀 </button>
      ) : (
        <button
          onClick={() => {
            googleLogout();
            toggleAuth(false);
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Auth;
