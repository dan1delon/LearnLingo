import { createSelector } from '@reduxjs/toolkit';
import { selectAdverts } from '../ads/selectors';

export const selectFilters = state => state.filters;
export const selectLocation = state => state.filters.location;
export const selectEquipment = state => state.filters.equipment;
export const selectType = state => state.filters.type;
export const selectTransmission = state => state.filters.transmission;

const filterByLocation = (ad, location) => {
  if (!location) return true;
  const adLocation = ad.location ? ad.location.toLowerCase() : '';
  return adLocation.includes(location.toLowerCase());
};

const filterByEquipment = (ad, equipment) => {
  if (!equipment.length) return true;
  const adEquipment = Object.keys(ad.details || {}).filter(
    key => ad.details[key] > 0
  );
  return equipment.every(equip => adEquipment.includes(equip));
};

const filterByType = (ad, type) => !type || ad.form === type;

const filterByTransmission = (ad, transmission) => {
  if (!transmission) return true;
  return ad.transmission === transmission;
};

export const selectFilteredAdverts = createSelector(
  [selectAdverts, selectFilters],
  (adverts, filters) => {
    const { location, equipment, type, transmission } = filters;

    return adverts.filter(
      ad =>
        filterByLocation(ad, location) &&
        filterByEquipment(ad, equipment) &&
        filterByType(ad, type) &&
        filterByTransmission(ad, transmission)
    );
  }
);
