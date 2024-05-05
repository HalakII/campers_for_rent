export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleFulfilledGet = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.infoDetails = payload;
};

export const handleRejected = (state, { payload }) => {
  console.error('Error:', payload);
  state.isLoading = false;
  state.error = payload;
};
