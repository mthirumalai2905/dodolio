import React from 'react';
import './LeetCode.css';
import leetcode from '../images/leet.png';
import github from '../images/git.png';
import codechef from '../images/codechef.png';
import codeforces from '../images/codeforces.png';
import geeksforgeeks from '../images/geeksforgeeks.png';
import atcoders from '../images/atcoders.png';

const Leetcode = () => {
  return (
    <div className='updated-big'>
      <h2>Consistency</h2>
      <div className='cp-container'>

        {/* LeetCode Profile */}
        <div className='cp-profile'>
          <div className='cp-info'>
            <p>Global Rank: Less than 24k</p>
            <div className='Ratings'>LeetCode Contest Account: 1752</div>
            <div className='top'>Top: 9.69% globally</div>
            <div className='streaks'>Streak: 626 🔥</div>
          </div>
          <div className='cp-image'>
            <img src={leetcode} alt="LeetCode Profile" />
          </div>
        </div>

        {/* Codeforces Profile */}
        <div className='cp-profile'>
          <div className='cp-info'>
            <p>Title: Pupil</p>
            <div className='Ratings'>Codeforces ID: thiru2905</div>
            <div className='top'>Max Rating: 1362</div>
            <div className='streaks'>Streak: 30 🔥</div>
          </div>
          <div className='cp-image'>
            <img src={codeforces} alt="Codeforces Profile" />
          </div>
        </div>

        {/* CodeChef Profile */}
        <div className='cp-profile'>
          <div className='cp-info'>
            <p>Global Rank: 4056</p>
            <div className='Ratings'>Country Rank: 3048</div>
            <div className='id'>CodeChef ID: thiru2905</div>
            <div className='star'>⭐⭐⭐⭐</div>
          </div>
          <div className='cp-image'>
            <img src={codechef} alt="CodeChef Profile" />
          </div>
        </div>

        {/* Another Profile */}
        <div className='cp-profile'>
          <div className='cp-info'>
            <p>Global Rank: 709</p>
            <div className='Ratings'>⭐⭐⭐⭐</div>
            <div className='streak'>Streak: 65 🔥</div>
          </div>
          <div className='cp-image'>
            <img src={geeksforgeeks} alt="Another Profile" />
          </div>
        </div>

        {/* Additional Profile */}
        <div className='cp-profile'>
          <div className='cp-info'>
            <div className='Ratings'>Title: Brown</div>
            <p>Global Rank: Less than 20k</p>
            <p>Max Rating: 764</p>
          </div>
          <div className='cp-image'>
            <img src={atcoders} alt="Additional Profile" />
          </div>
        </div>

        {/* Ninja Dominator Profile */}
        <div className='cp-profile'>
          <div className='cp-info'>
            <p>Title: Ninja Dominator</p>
            <div className='Ratings'>Streak: 39 🔥</div>
          </div>
          <div className='cp-image'>
            <img src={github} alt="Ninja Dominator Profile" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Leetcode;
