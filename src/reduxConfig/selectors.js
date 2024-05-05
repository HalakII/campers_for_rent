import { createSelector } from '@reduxjs/toolkit';
import {
  selectLocation,
  selectTransmission,
  selectForm,
  selectDetails,
} from './filter/selectors';

export const selectInfo = state => state.infoDetails.infoDetails;

export const selectIsLoading = state => state.infoDetails.isLoading;

export const selectError = state => state.infoDetails.error;

export const selectFavorites = state => state.favorites.infoDetails;

// export const selectFilteredCards = createSelector(
//   [selectLocation, selectTransmission, selectForm, selectDetails],
//   (infoDetails, location, transmission, form, details) => {
//     console.log('infoDetails:', infoDetails);
//     console.log('location:', location);
//     console.log('transmission:', transmission);
//     console.log('form:', form);
//     console.log('details:', details);
//     if (!location && !transmission && !form && details.length === 0) {
//       return infoDetails; // Повертаємо весь список без фільтрації, якщо всі фільтри null або пусті
//     }

//     // Фільтруємо за локацією
//     let filteredCards = infoDetails;
//     if (location) {
//       filteredCards = infoDetails.filter(card => {
//         return card.location.toLowerCase().includes(location.toLowerCase());
//       });
//     }

//     // Додаємо фільтрацію за transmission, якщо transmission не null
//     if (transmission !== null) {
//       filteredCards = filteredCards.filter(
//         card => card.transmission === transmission
//       );
//     }

//     // Додаємо фільтрацію за формою, якщо form не null
//     if (form !== null) {
//       filteredCards = filteredCards.filter(card => card.form === form);
//     }

//     // Додаємо фільтрацію за деталями, якщо details не пустий масив
//     if (details.length > 0) {
//       filteredCards = filteredCards.filter(card => {
//         return details.every(detail => card.details.includes(detail));
//       });
//     }

//     return filteredCards;
//   }
// );
