import classes from './Counter.module.css';
import {useSelector,useDispatch} from 'react-redux'
import { counterAction } from '../Store/index';

const Counter = () => {
  const dispatch=useDispatch();
  const count=useSelector(state=>state.counter.value);
  const show=useSelector(state=>state.counter.showCounter)

  const incrementHandler=()=>{
    dispatch(counterAction.increment())
  }
  const decrementtHandler=()=>{
    dispatch(counterAction.decrement());
  }
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle());

  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show && < div className={classes.value}>{count}</div>} 
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementtHandler}>Decrement </button>
      </div>
     
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
