import { stringify } from 'qs';
import request from '@/utils/request';

function getBillUrl(url) {
  return `${url}`;
}
/* bill表单
export async function queryBillList(params) {

  let ros = request(getBillUrl(`/api/bill/billList?${stringify(params)}`));
  return ros;
}*/

/* 查询 */
export async function queryBillList(params) {
  return request('/api/bill/billList');
}
/* 新增单据 */
export async function addBill(params) {
  return request('/api/bill/billList', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

/* 查询 */
export async function queryBillView(params) {
  return request(`/api/bill/billView?${stringify(params)}`);
}

/* 删除单据 */
export async function removeBill(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'delete',
    },
  });
}

