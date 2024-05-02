export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleFulfilledGet = (state, { payload }) => {
  console.log(payload);
  state.isLoading = false;
  state.error = null;
  state.infoDetails = payload;
  // state.infoDetails =
  //   state.infoDetails[0]?.id === payload[0]?.id
  //     ? payload
  //     : [...state.infoDetails, ...payload];
};

export const handleRejected = (state, { payload }) => {
  console.error('Error:', payload);
  state.isLoading = false;
  state.error = payload;
};
