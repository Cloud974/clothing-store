import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import './sign-in.styles.scss';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import { async } from '@firebase/util';


const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>
        Sign in with google popup
      </button>
      <SignUpForm />
    </div>
  )
}

export default SignIn