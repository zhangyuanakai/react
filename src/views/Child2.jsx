import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'

const Child2 = () => {
  const { store } = useContext(ThemeContext)

  return <div>
    <button onClick={ () => {store.dispatch({ type: 'VOTE_SUP' })} }>支持</button>
    <button onClick={ () => {store.dispatch({ type: 'VOTE_OPP' })} }>反对</button>
  </div>

}
// const Child2 = () => {
//
//   const { change } = useContext(ThemeContext);
//
//   return (
//     <div>
//       <button onClick={() => change('sup')}>支持</button>
//       <button onClick={() => change('opp')}>反对</button>
//     </div>
//   );
// };

export default Child2
