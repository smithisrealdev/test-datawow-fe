import axios, { Axios } from 'axios';
import { v4 as uuidv4 } from 'uuid';
// import * as Env from '../../../env';
// import jwt_decode from 'jwt-decode';

type RemoveCard = {
    id: number,
}
type EditCard = {
    id: string,
    title: string,
    checked: boolean,
}
interface MainAction {
  type: string;
  payload?: { id: number; value: string };
}

export const handleAPI_ACTION = `HANDLE_API_ACTION`;
export const handleAPI_ERROR = `HANDLE_API_ERROR`;
const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const handleInitialValue = async (): Promise<MainAction> => {
  try {
    const response = await api.get('/todos');
    return {
      type: handleAPI_ACTION,
      payload: response.data,
    };
  } catch (error) {
    console.error(error);
    // dispatch an error action if the API call fails
    return {
      type: handleAPI_ERROR,
      payload: error.message,
    };
  }
};


export const handleAddCard_ACTION = "handleAddCard_ACTION";
export const handleAddCard = (title:string) => {
  return {
    type: handleAddCard_ACTION,
    payload: {
      id:  uuidv4(),
      title,
      completed: false,
    },
  };
};
export const handleEditCard_ACTION = `handleEditCard_ACTION`;
export const handleEditCard = ({id,title,checked}:EditCard) => {
  console.log("handleEditCard :",id,title,checked)
  return {
    type: handleEditCard_ACTION,
    payload: {
       id,
       title,
       completed:checked
    },
  };
};

export const handleRemoveCard_ACTION = `handleRemoveCard_ACTION`;
export const handleRemoveCard = ({id}:RemoveCard) => {
  return {
    type: handleRemoveCard_ACTION,
    payload: {
       id,
    },
  };
};

