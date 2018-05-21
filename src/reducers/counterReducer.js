const initialState = {
  number: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPUP":
      return {
        number: state.number + 1
      };
    case "DOWNDOWN":
      return {
        number: state.number - 1
      };
    case "DOUBLEDOUBLE":
      return {
        number: state.number * 2
      };
    default:
      return state;
  }
};

export default counterReducer;
