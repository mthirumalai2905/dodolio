import React from 'react'
import leetcode from '../images/leet.png'
import github from '../images/git.png'
const Leetcode = () => {
  return (
    <div className='updated-big'>
    <h2>Consistency</h2>
    <div className='big'>
    <div className='leet-container'>
      <div className='leet'><img src={leetcode}/></div>
      <div className='git'><img src={github} /></div>
      </div>
    </div>
    </div>
  )
}

export default Leetcode
