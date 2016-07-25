import React,{Component} from 'react'
import {render} from 'react-dom'
import FontAwesome from 'react-fontawesome'


class Footer extends Component{
	render(){
		return(
			<div className="footer">
				<div className="footerLeft">2016 Tokiomarine Insurance Group. All rigths reserved.</div>
				<div className="footerCenter">
				    <img src="img/Tokio_Marine_logo.png" className="footerlogo"/>
				</div>
			    <div className="footerRight">
				    <FontAwesome className="sociallink" name='facebook-square'/>
			        <FontAwesome className="sociallink" name='twitter'/>
			        <FontAwesome className="sociallink" name='google-plus'/>
		        </div>
			</div>
		)
	}
}

export default Footer