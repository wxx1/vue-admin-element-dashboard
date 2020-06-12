//相关views页面的网络请求，最好按页面分开写，维护起来较为方便
import request from '@/utils/request'



/**
 * 请求用户列表
 */
export const getUserList = () => request('/mock/userList');

