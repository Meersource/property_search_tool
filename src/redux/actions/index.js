export const GET_FILTER_RESULT = "GET_FILTER_RESULT";
export const GET_CHECKED_FILTER_RESULT = "GET_CHECKED_FILTER_RESULT";

export const getFilterResult = (searchedValue) => {
  return {
    type: GET_FILTER_RESULT,
    payload: searchedValue,
  };
};

export const getCheckedFilterResult = (val) => {
  return {
    type: GET_CHECKED_FILTER_RESULT,
    payload: val,
  };
};
