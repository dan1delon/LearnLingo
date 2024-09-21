import { ref, remove, set, get } from 'firebase/database';
import { db } from '../firebase';
import { addFavorite } from '../redux/favorites/slice';
import toast from 'react-hot-toast';

export const addFavoriteToDatabase = async (userId, teacherId) => {
  await set(ref(db, `users/${userId}/favorites/${teacherId}`), true);
};

export const removeFavoriteFromDatabase = async (userId, teacherId) => {
  await remove(ref(db, `users/${userId}/favorites/${teacherId}`));
};

export const loadFavorites = async (userId, dispatch) => {
  const favoritesRef = ref(db, `users/${userId}/favorites`);
  const snapshot = await get(favoritesRef);

  if (snapshot.exists()) {
    const favoritesData = snapshot.val();
    for (const [key, value] of Object.entries(favoritesData)) {
      dispatch(addFavorite({ id: key, ...value, userId }));
    }
  }
};

export const addFavoriteAsync = payload => async dispatch => {
  try {
    await addFavoriteToDatabase(payload.userId, payload.id);
    dispatch(addFavorite(payload));
  } catch (error) {
    toast.error('Error adding favorite:', error);
  }
};

export const removeFavoriteAsync = payload => async dispatch => {
  try {
    await removeFavoriteFromDatabase(payload.userId, payload.id);
    dispatch(removeFavorite(payload));
  } catch (error) {
    toast.error('Error removing favorite:', error);
  }
};

export const loadFavoritesAsync = userId => async dispatch => {
  await loadFavorites(userId, dispatch);
};
