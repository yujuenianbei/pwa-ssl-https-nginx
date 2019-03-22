export const GET_VIDEO_DATA = 'GET_VIDEO_DATA';

// 用户弹窗
export function getData(data) {
    return {
        type: GET_VIDEO_DATA,
        data
    }
}

// 获取音乐列表
export function getList() {
    return (dispatch, getState) => {
        fetch('/api/videoList', {
            method: 'GET',
            // headers: {
            //   'token': localStorage.getItem('token')
            // }
        })
            .then((res) => {
                return res.text();
            })
            .then((res) => {
                dispatch(getData(JSON.parse(res).reqData.videoInfo));
            })
    }
}