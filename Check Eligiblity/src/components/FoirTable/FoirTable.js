import React from 'react';
import {convertNumberToWords} from '../texttonum/texttonum'
import { Card,Button } from 'react-bootstrap';

const FoirTable=({netSal,totEmi,totCc,totgol,expInVal,hmLn})=>{


//PV Value Calculation start
const conv_number=(expr,decplaces)=>{
    var str = "" + Math.round(expr* Math.pow(10,decplaces));
      while (str.length <= decplaces) {
      str = "0" + str;
}
    var decpoint = str.length - decplaces;
      return (str.substring(0,decpoint) + "." + str.substring(decpoint,str.length));
}

const PV=(rate,per,nper,pmt,fv)=>{
   nper=parseFloat(nper);
   pmt=parseFloat(pmt);
   fv=parseFloat(fv);
    let pv_value,x,y;
    rate=((rate)/(per*100))
    if((pmt===0)||(nper===0)){
        // alert("can't calculate with zero");
        return(0);
    }
    if(rate===0)//interest rate is 0
    {
        pv_value =-(fv+(pmt*nper));
    }
    else{
    x = Math.pow(1 + rate, -nper);
      y = Math.pow(1 + rate, nper);
      pv_value = - ( x * ( fv * rate - pmt + y * pmt )) / rate;
    }
    pv_value = conv_number(pv_value,2);
    return (pv_value);
}
//PV Value Calculation end


//calculate salary percentage
const CalSalPer=(sal)=>{
	if(sal>= 15000 && sal<=49999){
		return 55;
		//30k 50k 55%
	}else if(sal>=50000 && sal<=74999){
		return 65 	//50k 75k 65%
	}else if(sal>=75000){
		return 70 	//75k 70%
	}

}

//start elegEmi start
const CalEligibleEMI=()=>{
	let Net_Income= netSal;
	let Ex_Obligation= (totEmi+totCc+totgol);
	let NetSal_Percentage=hmLn ?  CalSalPer(Net_Income)+5 : CalSalPer(Net_Income);
	let Eligible_EMI=Math.round(((Net_Income)*(NetSal_Percentage/100)-Ex_Obligation))

	return Eligible_EMI;
}

//Create table start
	const GenTable=()=>{
		let Table=[];

		for(let r=1; r<=5; r++){
			let Loan_Amount=Math.round(PV(expInVal,12,(r*12),-CalEligibleEMI(),0.05))
			Table.push(

						<tr className="stripe-dark" key={r}>
							<td className="pa1 fw5 ba">{`For ${r} Year`}</td>
							<td className="pa1 fw5 ba">{`Max EMI Upto ₹ ${CalEligibleEMI()}`}</td>
							<td className="pa1 fw5 ba ">
							<small id="name-desc" className="f5 fw5 black-60 db mb2 black ">{`₹ ${Loan_Amount} `}{`(${convertNumberToWords(Loan_Amount)})`}</small>
							</td>
						</tr>

				)
		}
		return Table;
	}
//create table end
	return(
<div className="mv1 w-100 w-100-m w-100-l mw10 center CalOblitab bg-white br4">
  <small id="name-desc" className="f4 fw5 black-60 db mb2 black b">FOIR ELIGIBLE</small>
  <div className="overflow-auto tj pa2">
    <table className="f6 w-100 mw10 center" cellSpacing="0">

      <thead>
        <tr className="stripe-dark tc">
          <th className="fw5 tl pa2 bg-white ba">Tenure</th>
          <th className="fw5 tl pa2 bg-white ba">Monthly Installment</th>
          <th className="fw5 tl pa2 bg-white ba">Loan Amount</th>
        </tr>
      </thead>
      <tbody className="lh-copy">
      {GenTable()}
      </tbody>
    </table>
  </div>
</div>

		)
}
export default FoirTable;



