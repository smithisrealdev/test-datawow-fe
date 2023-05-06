import { Reducer } from "redux";
import * as actions from "../redux-action";

interface State {
  listTasks: [{id:string,title:string,completed:boolean}];
  error: string;
}

const initialState: State = {
  listTasks: [{id:'',title:'',completed:false}],
  error: "", 
};

const reducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    case actions.handleAPI_ACTION:
      return {
        ...state,
        listTasks:action.payload,
      };
    case actions.handleAPI_ERROR:
      return {
        ...state,
        error: action.payload.message,
      };
    case actions.handleAddCard_ACTION:
      return {
        ...state,
        listTasks: [...state.listTasks,action.payload],
      };
      case actions.handleEditCard_ACTION:
        return {
          ...state,
          listTasks: state.listTasks.map((task) =>
            task.id === action.payload.id ? action.payload : task
          ),
        };
    // case actions.handleRemoveCard_ACTION:
    //   return {
    //     ...state,
    //     listTasks: state.listTasks.filter((task) => task.id !== action.payload.id),
    //   };
    default:
      return state;
  }
};

export default reducer;

