import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../context';

const useAuthActions = () => {
  const navigate = useNavigate();
  const { closeModal } = useModal();

  const registration = async (data, e) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;

      // await updateProfile(user, {
      //   displayName: data.name,
      // });

      // await set(ref(db, 'users/' + user.uid), {
      //   name: data.name,
      //   email: data.email,
      // });
    } catch (error) {
      console.error('Error registering user:', error);
    } finally {
      closeModal(e);
      navigate('/teachers');
    }
  };

  const login = async (data, e) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (error) {
      console.error('Error logging in:', error);
    } finally {
      closeModal(e);
      navigate('/teachers');
    }
  };

  return { registration, login };
};

export default useAuthActions;
