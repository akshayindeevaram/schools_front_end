import React  from "react";
import { connect } from 'react-redux'
import { fetchNav } from "../../redux";
import "./Nav.css";
import { Link } from "react-router-dom";
import { reduxModel } from "../../model";
type props={
  navData:reduxModel
}
  function Nav({navData}:props){
    
    return(
    <div>
      <div><ul className="nav-bar">
        {navData && 
        navData.nav &&
        navData.nav.nav.map((nav,ind)=><li  key={ind}><Link to={nav.path}>{nav.name}</Link></li>)}
        <div>
          <input type="text" placeholder="Enter keywords!" name="search" />
          <button type="submit">Search</button>
        </div>
      </ul>
      </div>
    </div>
  )


}

const mapStateToProps = (state: reduxModel)=>{
  return {
    navData:state
  }
}

const mapDispatchToProps = (dispatch: any)=>{
  return{
    fetchNav:()=>dispatch(fetchNav())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)