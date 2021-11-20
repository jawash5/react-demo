/**
 *
 * @param preState 之前的对象
 * @param action 动作对象
 */
const initState = 0

export default function countReducer(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case 'increment':
      return preState + data
    case 'decrement':
      return preState - data
    default:
      return preState
  }
}
