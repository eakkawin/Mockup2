import React,{Component} from 'react'
import {render} from 'react-dom'
var detail = [{name:'อุบัติเหตุคุ้มครอง ชีวิต อวัยวะ ทุพพลภาพ',key:'r1'},
{name:'จลาจล สงครามกลางเมือง-เอไอ',key:'r2'},
{name:'อุบัติเหตุคุ้มครอง ชีวิต อวัยวะ',key:'r3'},
{name:'จลาจล สงครามกลางเมือง-เอดีดี',key:'r4'},
{name:'อุบัติเหตุคุ้มครอง ชีวิต',key:'r5'},
{name:'จลาจล สงครามกลางเมือง-เอดีบี',key:'r6'}]
class AddInsurance extends Component{
	render(){
		return(
			<div>
			<div className="f_block col-12">
				<div className="f_modal col-12">
					<div className="addInsuBlock col-12">
						<div className="col-6">
							<span className="f_modal_title">สัญญาเพิ่มเติม</span>
						</div>
						<div className="col-3">
						    <span className="f_modal_title">ทุนประกันภัย (บาท)</span>
						</div>
						<div className="col-3">
							<span className="f_modal_title">เบี้ยประกันภัย (บาท/งวด)</span>
						</div>
						</div>
						<hr/>
						{detail.map(function(dname,index){
							return(
								<div key={index} className="checklistInsu col-12">
									<div className="col-6">
										<input id={dname.key} type="radio" name="group1" className="radio4" />
										<label htmlFor={dname.key} className="f_modal_header">{dname.name}</label>
									</div>
									<div className="col-3">
									    <input type="text" disabled value="0" className="disable"/>
									</div>
									<div className="col-3">
									    <span className="price">0</span>
									</div>
								</div>
								);
							})
						}
					</div>
				</div>
				<div className="f_totalblock col-12">
					<div className="f_totaltitle col-4">เบี้ยประกันรวม</div>
					<div className="f_total col-8"><span>0 บาท</span></div>
				</div>
				<div className="btn_box">
					<div className="btn_block">
						<div><a className="btn btn_space ">กลับ</a></div>
						<div><a className="btn">ยืนยันการเลือก (0 รายการ)</a></div>
					</div>
				</div>
			</div>
		)
	}
}
export default AddInsurance