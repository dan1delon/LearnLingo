import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { ref, set, get } from 'firebase/database';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../context';
import { useDispatch } from 'react-redux';
import { logout, setUser } from '../redux/auth/slice';
import { loadFavorites } from './firebaseFavorites';

const useAuthActions = () => {
  const navigate = useNavigate();
  const { closeModal } = useModal();
  const dispatch = useDispatch();

  const registration = async data => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: data.name,
      });

      await set(ref(db, 'users/' + user.uid), {
        name: data.name,
        email: data.email,
      });

      dispatch(
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || data.name,
        })
      );
    } catch (error) {
      console.error('Error registering user:', error);
    } finally {
      navigate('/teachers');
    }
  };

  const login = async (data, e) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;

      const userRef = ref(db, 'users/' + user.uid);
      const snapshot = await get(userRef);
      const userData = snapshot.val();

      dispatch(
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: userData.name || user.displayName,
        })
      );
      await loadFavorites(user.uid, dispatch);
    } catch (error) {
      console.error('Error logging in:', error);
    } finally {
      closeModal(e);
      navigate('/teachers');
    }
  };

  const logOutUser = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
    } catch (error) {
      console.error('Error logging out:', error);
    } finally {
      navigate('/');
    }
  };

  return {
    registration,
    login,
    logOutUser,
  };
};

export default useAuthActions;
