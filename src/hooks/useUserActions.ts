import { useAppDispatch } from "./Store";
import { deleteUserById } from "../store/users/slice";


export const useDispatchActions = () => {
  const dispatch = useAppDispatch();
  const removedUser = (id: string) => {
    dispatch(deleteUserById(id));
  };

  return { removedUser };
};
