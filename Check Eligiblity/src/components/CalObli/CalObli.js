import React from 'react'
import './CalObli.css'
import {convertNumberToWords} from '../texttonum/texttonum'

const CalObli=({EMI_Pay,adderBut,totEmi,CC_OS,totCc,GL_PLS,totgol,mulVal,MulValSta,exRoi,expInVal,netSal,hlfix,Re_set,keypre,ipIsVal,ipState})=>{

return(
	<div>

	<article className="ba w-100 w-100-m w-100-l mw10 center CalObli bg-white ph3-ns">
	<div className="cf ph2-ns">
	
		<div className="fl w-60-ns br mobRes">
	
		<h5 className="gray">CALCULATE OBLIGATION</h5>
			<div className="fl w-50 mobRes1">
				<input type="number" 	className={ipState ? "obiInpErr" :"obiInp"} id="EMI_Pay" placeholder="EMI Paying" onChange={EMI_Pay} onKeyPress={ipIsVal}/>
				<button id="inc" 	className="butsty grow butsty1" onClick={()=>{adderBut("EMI_Pay")}}>+</button> <br/>
				{
					ipState ? <small id="name-desc" className="f6 black-60 db mb2 dark-red">{`Invalid Input!`}</small>
					:
					<small id="name-desc" className="f6 black-60 db mb2 smallRes">{`Total Emi Paying ${totEmi} `}<label className="pointer underline hover-dark-green" onClick={()=>{Re_set('EMI_Pay')}}> (Reset)</label></small>
				}
				
			</div>
			<div className="fl w-50 mobRes1">
				<input type="number" className="obiInp" id="cc_os" placeholder="credit card out standing" onChange={CC_OS}/>
				<button id="inc" className="butsty grow"  onClick={()=>{adderBut("cc_os")}}>+</button>
				<small id="name-desc" className="f6 black-60 db mb2">{`Total credit card obligation  ${totCc} `} <label className="pointer underline hover-dark-green" onClick={()=>{Re_set('cc_os')}}> (Reset)</label></small>
			
			</div>
			<div className="fl w-50 mobRes1">
				<input  type="number" className="obiInp" id="go_l" placeholder="Gold Loan" onChange={GL_PLS}/>
				<button id="inc" className="butsty grow" onClick={()=>{adderBut("go_l")}} >+</button>

				<small id="name-desc" className="f6 black-60 db mb2">{`Total Gold Paying ${totgol}`} <label className="pointer underline hover-dark-green" onClick={()=>{Re_set('go_l')}}> (Reset)</label></small>
			
			</div>
			<div className="fl w-50 radCon mobRes1">
				  <label className="f4 b hlRes">Having Any Home Loan ? &nbsp;</label>
					<div className="container">
					  <ul>
						  <li >
						    <input type="radio" id="f-option" name="selector" onClick={()=>hlfix(true)} />
						    <label htmlFor="f-option" style={{"padding-left":"111px"}}>YES</label>
						    <div className="check"></div>
						  </li>
						  <li >
						    <input type="radio" id="s-option" name="selector" onClick={()=>hlfix(false)} defaultChecked />
						    <label htmlFor="s-option" style={{"padding-left":"111px"}}>NO</label>
						    <div className="check"><div className="inside"></div></div>
						  </li>
					</ul>
					</div>				  

			</div>

			<div className="fl w-100 bt pa1">
				<p className="f4 gray ttu lh-solid fw6">Expecting Interest Rate </p>
				<input type="range" id="roiId" min="1" max="30" onInput={()=>{"roiIp.value=roiId.value"}} onChange={exRoi} value={expInVal}/>
						<br/>
						<div className="ransc-con">
						<label className="ranSc tl">1%</label>
						<label className="ranSc25">15%</label>
						<label className="ranSc50 tr">30%</label>
						</div>
				<input className="f2 p2 tc" id="roiIp" type="number" onInput={()=>{"roiId.value=roiIp.value"}} onChange={exRoi} value={expInVal}/><label className="f2 p2">%</label>
			</div>							
		</div>
		<div className="fl  w-40-ns pa1 mobRes1">


			<div className="bb">
				<p>TOTAL OBLIGATION</p>
				<p className="f2 pa1 totobval mw100">₹ {`${(totEmi+totCc+totgol)}`}</p>			
			</div>


		<div className="totObli">
			<div className="w-100">	
				<p>Multipler Calculation</p>
			</div>
			<div className="w-50 center">
				<label className="f3 pa1 mw4 fl totobval">{`₹ ${Math.round(netSal-(totEmi+totCc+totgol))}`} X </label>
			</div>

			<div className="w-50 center">
				<input id="mulVal" type="number" className="pa2 ma2 bb mw4 mulValw fl" onChange={mulVal}/>
			</div>
			
			<label className="f1 pa1 mw10 f1 totobval">{`₹${Math.round((netSal-(totEmi+totCc+totgol))* MulValSta)}`}</label>

			<small id="name-desc" className="f6 black-60 db mb2 black b">{convertNumberToWords(Math.round((netSal-(totEmi+totCc+totgol))* MulValSta))}</small>
		</div>
		</div>
		</div>
	</article>
	</div>



	)	
}
export default CalObli;
