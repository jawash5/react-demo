/**
 *
 * @param preState 之前的对象
 * @param action 动作对象
 */
import { INCREMENT, DECREMENT } from './constant'

const initState = 0

export default function countReducer(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case INCREMENT:
      return preState + data
    case DECREMENT:
      return preState - data
    default:
      return preState
  }
}
