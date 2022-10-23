import { GET_FILTER_RESULT } from "../actions/index";

// const users= [];
const initialState = {
  users: [
    {
      id: 1,
      address: "lahore",
      postcode: "2355",
      numofroom: "19",
      floorarea: "45",
    },
    {
      id: 2,
      address: "lugumberg",
      postcode: "2355",
      numofroom: "19",
      floorarea: "45",
    },
    {
      id: 3,
      address: "sialkot",
      postcode: "664",
      numofroom: "39",
      floorarea: "75",
    },
    {
      id: 4,
      address: "multan",
      postcode: "4566",
      numofroom: "25",
      floorarea: "65",
    },
    {
      id: 5,
      address: "karachi",
      postcode: "2444",
      numofroom: "23",
      floorarea: "78",
    },
    {
      id: 6,
      address: "Gujranwala",
      postcode: "5224",
      numofroom: "22",
      floorarea: "45",
    },
    {
      id: 7,
      address: "	Afghanistan",
      postcode: "7214",
      numofroom: "262",
      floorarea: "45",
    },
    {
      id: 8,
      address: "Bosnia and Herzegovina",
      postcode: "764",
      numofroom: "y6",
      floorarea: "485",
    },
    {
      id: 9,
      address: "Dominican Republic",
      postcode: "42204",
      numofroom: "882",
      floorarea: "415",
    },
    {
      id: 10,
      address: "	Equatorial Guinea",
      postcode: "324",
      numofroom: "322",
      floorarea: "435",
    },
    {
      id: 11,
      address: "Kyrgyzstan",
      postcode: "1224",
      numofroom: "282",
      floorarea: "485",
    },
  ],
  searchResults: [],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILTER_RESULT:
      return {
        ...state,
        searchResults: state.users.filter((o) =>
          o.address.includes(action.payload)
        ),
      };
    // case GET_USERS_SUCCESS:
    //   return { ...state, users: action.users };
    default:
      return state;
  }
};
export default filterReducer;
