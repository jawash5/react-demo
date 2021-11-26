import CountUI from '../../components/Count'
import { connect } from 'react-redux'
import {
  createDecrementAction,
  createIncrementAction,
  createIncrementAsyncAction
} from '../../redux/count_action'

// 函数mapStateToProps的返回值是一个对象
// 作为状态传递给了UI组件, redux接受的状态
function mapStateToProps(state) {
  return { count: state }
}

// mapDispatchToProps修改状态的方法
function mapDispatchToProps(dispatch) {
  return {
    increment: (data) => dispatch(createIncrementAction(data)),
    decrement: (data) => dispatch(createDecrementAction(data)),
    incrementAsync: (data, time) =>
      dispatch(createIncrementAsyncAction(data, time))
  }
}

// 使用 connect()() 创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
