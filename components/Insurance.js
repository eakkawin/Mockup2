import React,{Component} from 'react'
import {render} from 'react-dom'
import FontAwesome from 'react-fontawesome'
import {Link} from 'react-router'

class Insurance extends Component{
	render(){
		return(
			<div className="block col-12">
				<div className="col-12">
					<div className="col-2">
						<span className="big">งวดชำระเบี้ย</span>
					</div>
					<div className="col-4">
						<button className="dropdown">รายปี</button>
					</div>
				</div>
				<div className="insu col-12">
					<div className="col-9">
					    <span className="type">ทุนประกันภัย (บาท)</span>
					</div>
					<div className="col-3">
					    <span className="type">เบี้ยประกันภัย (บาท/งวด)</span>
					</div>
				</div>

				<div className="modalblocktop col-12">
					<div className="modalmargin col-12">
						<div className="col-6">
						    <span className="modalheader head">WLP4 กรมธรรม์ประกันภับแบบโฮล ไลฟ์พลัส 20 ปี</span>
						</div>
						<div className="inputbasic col-3">
						    <input type="text" className="basic"/>
						</div>
						<div className="inputbasic col-3">
						    <input type="text" className="basic"/>
						</div>
					</div>
					<div className="modalmargin col-12">
						<div className="swicth">
							<div className="onoffswitch head">
							    <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch"/>
							    <label className="onoffswitch-label" htmlFor="myonoffswitch"></label>
							</div>
						</div>
						<div className="col-10">
							<span className="modaldetail">เลือกซื้อคู่กับ โซลูชั่น ดีไซน์</span>
						</div>
					</div>
				</div>
				<div className="modalblockmid col-12">
					<div className="modalmargin col-12">
						<div className="col-6">
							<span className="modaldetail head">ประกันภัยอุบัติเหตุส่วนบุคคล</span>
						</div>
						<div className="col-6">
							<button className="dropdown"><hr className="inside"/><span className='selectinsul'>เลือกแบบประกันภัย</span><hr className="inside"/></button>
						</div>
					</div>
				</div>


				<div className="addprom col-12">
					<div className="col-2">
						<span className="big">สัญญาเพิ่มเติม</span>
					</div>
				</div>
				<div className="modalblockbot col-12">
					<div className="selectaddprom col-12">
						<div className="col-12">
							<button className="addbtn">
								<Link to='a'><a>เลือกสัญญาเพิ่มเติม</a></Link>
							</button>
						</div>
					</div>
					<div className="totalblock col-12">
						<div className="totaltitle col-4">เบี้ยประกันรวม</div>
						<div className="total col-8"><span>0 บาท</span></div>
					</div>
				</div>
			</div>
		)
	}
}
export default Insurance