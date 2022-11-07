import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

export default function SignOut() {
    const auth = firebase.auth();
    return auth.currentUser && (
      <button onClick={() => auth.signOut()}>Sign Out</button>
    )
  }