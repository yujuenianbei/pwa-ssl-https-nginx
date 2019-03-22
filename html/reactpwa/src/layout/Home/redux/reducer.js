import {
    GET_VIDEO_DATA
} from './action';

const initValue = {
    videoListData: ''
}
export default (state = initValue, action) =>{
    const data = action.data
    switch (action.type) {
        case GET_VIDEO_DATA: {
            return Object.assign({}, state, { videoListData: data })
          }
          default: {
            return state;
          }
    }
}