import React from 'react'

const Regularbtn = ({Handlefn,buttoncopy}) => {
  return (
    <button onClick={Handlefn} >{buttoncopy}</button>
  )
}

export default Regularbtn