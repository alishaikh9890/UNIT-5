
function navbar(){
   return `      <div id="logo">
   <a href="">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ0rIhoUggUEIpCEG1n1-TqSawoFSqRtY1lw&usqp=CAU"
       alt=""
        />
      </a>
</div>
<div id="search">
   <input type="text" id="search-input" placeholder="search or jump to .."/>
</div>
<div id="option">
   <ul id="list">
      <li><a href="">Pull request</a></li>
      <li><a href="">Issue</a></li>
      <li><a href="">Market</a></li>
      <li><a href="">Explore</a></li>
   </ul>
</div>
<div id="profile">
   <a href="">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr37hVv5WAhtm_QmTLoHjmVB-7imJa46Nbq1lSDFumvQ&s" 
      alt=""
      id="profile-img"
      />
   </a>
</div>
`
}

export default navbar;