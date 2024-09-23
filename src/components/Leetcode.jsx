import React from 'react'
import leetcode from '../images/leet.png'
import github from '../images/git.png'
import codechef from '../images/codechef.png'
import codeforces from '../images/codeforces.png'
import geeksforgeeks from '../images/geeksforgeeks.png'
import Atcoders from '../images/atcoders.png'
const Leetcode = () => {
  return (
    <div className='updated-big'>
    <h2>Consistency</h2>
    <div className='big'>
    <div className='leet-container'>
      <div className='leet'><img src={leetcode}/></div>
      <div className='git'><img src={github} /></div>
      <div className='codechef'><img src={codechef}/></div>
      <div className='codeforces'><img src={codeforces}/></div>
      <div className='geeksforgeeks'><img src={geeksforgeeks}/></div>
      <div className='atcoders'><img src={Atcoders}/></div>

      </div>
    </div>
    </div>
  )
}

export default Leetcode
