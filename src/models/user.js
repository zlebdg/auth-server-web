import { currentUser as queryCurrentUser } from '@/services/home'

const UserModel = {
  namespace: 'user',
  state: {
    currentUser: {},
  },
  effects: {
    * fetchCurrent(_, { call, put }) {
      const response = yield call(queryCurrentUser)
      if (response && response.code == 200 && response.data) {
        yield put({
          type: 'saveCurrentUser',
          payload: JSON.parse(response.data),
        })
      } else {
        yield put({
          type: 'saveCurrentUser',
          payload: response,
        })
      }
    },
  },
  reducers: {
    saveCurrentUser(state, action) {
    console.log(action)
      return {
        ...state,
        currentUser: action.payload || {},
      }
    },
  },
}
export default UserModel
