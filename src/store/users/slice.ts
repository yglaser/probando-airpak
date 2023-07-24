import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  name: string;
  email: string;
  gitHub: string;
}
export interface UsersWithId extends User {
  id: string;
}

const initialState: UsersWithId[] = [
  {
    email: "juan@gmail.com",
    gitHub: "https://github.com/juan",
    id: "1",
    name: "Juan",
  },
  {
    id: "2",
    name: "pedro",
    gitHub: "https://github.com/pedro",
    email: "pedro@gmailcom ",
  },
  {
    id: "3",
    name: "maria",
    gitHub: "https://github.com/maria",
    email: "maria@gmailcom ",
  },
];
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {

    deleteUserById: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      return state.filter((user) => user.id !== id);
    },
  },
});

export default usersSlice.reducer;
export const {deleteUserById} = usersSlice.actions;