import React,{Component, PropTypes} from 'react'
require('../css/style.css')
import EQuote from './EQuote.js'

class Navbar extends Component{
	render(){
		return(
			<div>
				<div className="header">
					<img className="headerLogo" src="img/tokiomarine.png"/>
			       	<div className="headerRight">
			           <div className="headerTab" id="headerHome">HOME</div>
			           <div className="headerTab" id="headerEQUOT">E_QUOTATION</div>
			           <div className="headerTab" id="headerEAPP">E_APPLICATION</div>
			           <div className="headerTab" id="headerLAN">| TH</div>
			       </div>
			    </div>
			    <EQuote/>
			    {this.props.children}
		    </div>
		)
	}
}

export default Navbar
