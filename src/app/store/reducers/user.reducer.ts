import { IUser } from "../states";

export const ADD_USER = 'ADD_USER';

export function addUserReducer(state: IUser, action: any) {
    switch (action.type) {
      case ADD_USER:
          return action.payload;
      default:
          return state;
      }
  }