import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setUser, logout } from '../redux/auth/slice';
import { auth } from '../firebase';

const useAuthListener = () => {
  const dispatch = useDispatch();
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;

    const unsubscribe = onAuthStateChanged(auth, user => {
      if (isMounted.current) {
        if (user) {
          dispatch(
            setUser({
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
            })
          );
        } else {
          dispatch(logout());
        }
      }
    });

    return () => {
      isMounted.current = false;
      unsubscribe();
    };
  }, [dispatch]);

  return null;
};

export default useAuthListener;
