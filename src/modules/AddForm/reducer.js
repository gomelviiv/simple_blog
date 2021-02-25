const initialState = {
  title: '',
  imageUrl: '',
  description: '',
  text: '',
  createdAt: ''
}

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'POST:CHANGE_TITLE':
            return {
                ...state,
                title: payload
            }
        case 'POST:CHANGE_IMAGE_URL':
            return {
                ...state,
                imageUrl: payload
            }
        case 'POST:CHANGE_DESCRIPTION':
            return {
                ...state,
                description: payload
            }
        case 'POST:CHANGE_TEXT':
            return {
                ...state,
                text: payload
            }
        case 'POST:CHANGE_CREATED_AT':
            return {
                ...state,
                createdAt: payload
            }
        default:
            return state;
    }
}