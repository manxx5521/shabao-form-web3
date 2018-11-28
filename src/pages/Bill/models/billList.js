import { queryBillList, addBill, removeBill } from '@/services/billApi';
import { message } from 'antd';

export default {
  namespace: 'billList',

  state: {
    data: {
      list: [],
      pagination: {},
      rqsuccess: false,//存放异步返回信息
    },
  },

  effects: {
    *fetch({payload}, {call, put}) {
      const response = yield call(queryBillList, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *add({payload, callback}, {call, put}) {
      const response = yield call(addBill, payload);
      yield put({
        type: 'addBill',
        payload: response,
      });
      if(response&&response.success&&callback) callback();
      /*
      if(response.success){
        message.success('添加成功');

        if (callback) callback();
      }else{
        message.error(`${response.message}`);
      }*/
    },
    *remove({payload, callback}, {call, put}) {
      const response = yield call(removeBill, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },
  },
    reducers: {
      save(state, action) {
        return {
          ...state,
          data: action.payload,
        };
      },
      addBill(state, action) {
        return {
          ...state,
          rqsuccess : action.payload.success,
        };
      },
    },

}
