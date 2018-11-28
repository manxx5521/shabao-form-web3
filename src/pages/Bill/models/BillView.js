import { queryBillView} from '@/services/billApi';

export default {
  namespace: 'billView',

  state: {
    billInfo:{},
    basicGoods: {},
    advancedOperation1: [],
    advancedOperation2: [],
    advancedOperation3: [],
  },

  effects: {
    *fetchBillView(_, { call, put }) {
      const response = yield call(queryBillView,payload);
      yield put({
        type: 'show',
        payload: response,
      });
    },
    *fetchAdvanced(_, { call, put }) {
      const response = yield call(queryAdvancedProfile);
      yield put({
        type: 'show',
        payload: response,
      });
    },
  },

  reducers: {
    show(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
