import React,{Component} from 'react'
import {render} from 'react-dom'
import Insurance from './Insurance.js'

var tab = [{name:'ข้อมูลผู้เอาประกันภัย',key:'a',color:'',margin:''},{name:'เลือกแบบประกัน',key:'b',color:'',margin:''},{name:'จัดการแบบประกัน',key:'c',color:'color',margin:''},{name:'สรุปทุน/เบี้ยประกัน',key:'d',color:'',margin:'tabblocklast'}];
	
class InsuranceTab extends Component{
	myFunction() {
	    var x = document.getElementById("Demo");
	    if (x.className.indexOf("show") == -1) {
	        x.className += " show";
	    } else {
	        x.className = x.className.replace(" show", "");
	    }
	}
	
			
	
	render(){
		var opencity = function(evt, cityName) {
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
					<li key={index} className={"tabblock "+tname.margin}>
					  	<a href="#" className={tname.color+" tablink"} onClick={opencity.bind(this, tname.key)}>	
						  	<img src="img/Username.svg" className="tablogo"/>
							<div className="tab">
								<p>{tname.name}</p>
							</div>
						</a>
					</li>
					);
				})}
				</ul>
				<div id="a" className="city">
				</div>
				<div id="b" className="city"></div>
				<div id="c" className="city">
					<Insurance/>
				</div>
				<div id="d" className="city"></div>
			</div>
		</div>
		)
	}
}
export default InsuranceTab