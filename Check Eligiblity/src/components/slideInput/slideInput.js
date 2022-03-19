import React from 'react'
import './slideInput.css'
import {convertNumberToWords} from '../texttonum/texttonum'


const slideInput=({netSal,netsalVal})=>{
return(
	<div>
	<article className="ba  mv4 w-100 w-100-m w-100-l mw10 center bg-white sideIP">
	<br/>
	<div className="salcon pa1">
		<p className="f4 gray ttu lh-solid fw6">Net Salary </p>
		<input type="range" id="rangeIp" min="15000" onInput={()=>"inputIp.value=rangeIp.value"} max="500000" onChange={netSal} value={netsalVal}/>
		<br/>
		<div className="ransc-con">
		<label className="ranSc tl">15K</label>
		<label className="ranSc25">2.5L</label>
		<label className="ranSc50 tr">5L</label>
		</div>
		<br/>
		<div className="salinpIP">
		<label className="f2 pa1 mt2">₹  </label>
		<input type="text" className="w4 f2 bb" 	id="inputIp"  onInput={()=>"rangeIp.value=inputIp.value"} onChange={netSal} value={netsalVal}/>
		<small id="name-desc" className="f5 black-60 db mb2 black ">{`(${convertNumberToWords(netsalVal)})`}</small>	
		</div>		
	</div>
	</article>


	</div>



	)	
}
export default slideInput;


