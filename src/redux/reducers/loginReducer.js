const initialState={
  id: 0,
  nombre: ''
}

export default (state = initialState, action) => {
  switch(action.type){
    case 'login':
      return {
        ...state,
        id: action.payload.id,
        nombre: action.payload.nombre
      }
    default:
      return state;
  }
}
