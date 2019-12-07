import {NEW_TASK, CHANGE_SELECTED_TASK, FINISH_SELECTED_TASK, NEW_TITLE} from "./actions";

const initialState = {
  items: [
    {id: 1, title: "Тестовая доска 1", tasks: ["Пример таска 1", "Пример таска 2"]},
    {id: 2, title: "Тестовая доска 2", tasks: ["Пример таска 3", "Пример таска 4"]}
  ],
  selectedTaskPosition: {position: null, cardId: null},
  finishTaskPosition: {position: null, cardId: null}
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case NEW_TASK: 
      const newMessage = action.text;
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              tasks: [...item.tasks, newMessage]
            };
          }
          return item;
        })
      };
    case CHANGE_SELECTED_TASK:
      return {
        ...state,
        selectedTaskPosition: {
          ...state.selectedTaskPosition,
          position: action.position,
          cardId: action.cardId
        }
      }
    case FINISH_SELECTED_TASK: 
      if (state.selectedTaskPosition.cardId === action.cardId && state.selectedTaskPosition.position === action.position) {
        return {
          ...state
        }
      }
      if (state.selectedTaskPosition.cardId === action.cardId) {
        return {
          ...state
        }
      }

      let message;
      state.items.forEach((item) => {
        if (item.id === state.selectedTaskPosition.cardId) {
          item.tasks.forEach((item, i) => {
            if (i === state.selectedTaskPosition.position) {
              message = item;
            }
          })
        } 
      });
 
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === state.selectedTaskPosition.cardId) {
            return {
              ...item,
              tasks: item.tasks.filter((item, i) => i !== state.selectedTaskPosition.position) 
            }
          }
          if (item.id === action.cardId) {
            return {
              ...item,
              tasks: [...item.tasks, message]
            }
          }
          return item;
        })
      }

    case NEW_TITLE: 
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.cardId) {
            console.log(item)
            return {
              ...item,
              title: action.newTitle
            }
          }
          return item;
        })
      }
    default: 
      return state;
  }
}

export default reducer;