import React,{Component} from 'react'
import {render} from 'react-dom'
import InsuranceTab from './InsuranceTab.js'
import FontAwesome from 'react-fontawesome'
import AddInsuranceTab from './AddInsuranceTab.js'

class EQuote extends Component{
	render(){
		return(
			<div>
			<div className="topslidebar col-12" >
		    	<h1 className="logo">E-QUOTATION</h1>
		    	<hr className="logounderline"/>
		    	<div className="detailblock">
		    		<div className="infoBox first">
			    		<div className="infoHead">
			    			<span>ตัวแทนเสนอขาย</span>
			    		</div>
			    		<div className="info">
			    			<span>0000AAAA นายจอห์น โด</span>
			    		</div>
			    	</div>
			    	<div className="infoBox">
			    		<div className="infoHead">
			    			<span>ผู้เอาประกัน</span>
			    		</div>
			    		<div className="info">
			    			<span><FontAwesome name="user"/> | อายุ 30 ปี | ชั้นที่ 1 ขับขี่มอเตอร์ไซค์รับจ้าง</span>
			    		</div>
			    	</div>
		    	</div>
	    	</div>
			{this.props.children}
			</div>
		)
	}
}
export default EQuote