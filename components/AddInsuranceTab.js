import React,{Component} from 'react'
import {render} from 'react-dom'
import AddInsurance from './AddInsurance.js'

var tab = [{name:'สัญญาเพิ่มเติมอุบัติเหตุ',key:'a',color:'color',margin:'',img:'Username.svg'},{name:'สัญญาเพิ่มเติมสุขภาพ',key:'b',color:'',margin:'',img:'Like_2.svg'},{name:'สัญญาเพิ่มเติมอื่นๆ',key:'c',color:'',margin:'tabblocklast',img:'More_2.svg'}];

class AddInsuranceTab extends Component{
	myFunction() {
	    var x = document.getElementById("Demo");
	    if (x.className.indexOf("show") == -1) {
	        x.className += " show";
	    } else {
	        x.className = x.className.replace(" show", "");
	    }
	}

	

	render(){
		var openCity = function(evt, cityName) {
			var i, x, tablinks;
			x = document.getElementsByClassName("city");
			for (i = 0; i < x.length; i++) {
				x[i].style.display = "none";
			}
			tablinks = document.getElementsByClassName("tablink");
			for (i = 0; i < x.length; i++) {
			    tablinks[i].className = tablinks[i].className.replace(" color", "");
			}
			document.getElementById(cityName).style.display = "block";
			evt.currentTarget.className += " color";
		}
		return(
		<div className="col-12">
			<div className="modal">
				<ul className="navbar">
					{tab.map(function(tname,index){
						return(
						<li className={"tabblock2 "+tname.margin}>
						  	<a href="#" className={"tablink "+tname.color} onClick={openCity.bind(event, tname.key)}>
							  	<img src={"img/"+tname.img}/>
							  	<div className='modaldetail'>
								  	<p>{tname.name}</p>
								  	<p>0 รายการ - 0 บาท</p>
								</div>
							</a>
						</li>
						);
					})}
				</ul>
				<div id="a" className="city">
					<AddInsurance/>
				</div>
				<div id="b" className="city"></div>
				<div id="c" className="city"></div>
			</div>
		</div>
		)
	}
}
export default AddInsuranceTab