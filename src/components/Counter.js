import classes from './Counter.module.css';
import {useSelector,useDispatch} from 'react-redux'


const Counter = () => {
  const dispatch=useDispatch();
  const count=useSelector(state=>state.counter);

  const incrementHandler=()=>{
    dispatch({type:'increment'})
  }
  const decrementtHandler=()=>{
    dispatch({type:'decrement'})
  }
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{count}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementtHandler}>Decrement</button>
      </div>
     
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
