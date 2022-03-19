import React,{Component} from 'react';
import SlideInput from './components/slideInput/slideInput'
import CalObli from './components/CalObli/CalObli'
import FoirTable from './components/FoirTable/FoirTable'
import WtbNavbar from './components/WtbNavbar/WtbNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import tachyons from 'tachyons'
import './App.css';
let emipls,ccospls,glpls=0;
class App extends Component{
  constructor(){
    super()
    this.state={ 
    netSal:15000,
    EMI_Pay:0,
    cc_os:0,
    go_l:0 ,
    hmLn:false,
    mulVal:1,
    expRoi:1,
    ipIsVal:false

    }
  }
//reset obligation input part start
ReSt=(b)=>{
  if(b==="EMI_Pay"){
     this.setState({EMI_Pay:0})
     emipls=0
   }else if(b==="cc_os"){
      this.setState({cc_os:0})
     ccospls=0
   }else if(b==="go_l"){
     this.setState({go_l:0})
     glpls=0
   }
}

Re_set=(g)=>{
  console.log("You clicked!", g)
   let E_set=document.getElementById(`${g}`);
   this.ReSt(g)
    E_set.value='';
    E_set.focus();
    E_set.select();
    
}
//reset obligation input part end

//Number validate function start
ipIsVal=(event)=>{
  if(event.key==="+" || event.key==="-"){
    this.setState({ipIsVal:true})
  }else{
    this.setState({ipIsVal:false})
  }
}

//Number validate function end

//evets state
  netSal=(event)=>{this.setState({netSal:event.target.value});}

  exRoi=(event)=>{this.setState({expRoi:event.target.value});}

  mulVal=(event)=>{this.setState({mulVal:event.target.value});}

  hlfix=(h)=>{this.setState({hmLn:h});}
//evets state end

//emi paying calculation
EMI_Pay=(event)=>{ 
  if(this.state.ipIsVal){
    this.setState({EMI_Pay:0})
    emipls=0
    console.log("Not Valid Ip!")

  }else{
     emipls>0 ? this.setState({EMI_Pay:emipls +Number(event.target.value)}) : this.setState({EMI_Pay:Number(event.target.value)})

  }  

}  

//credit card outstanding calculation start
CC_OS=(event)=>{  ccospls>0 ? this.setState({cc_os:ccospls +event.target.value*0.05}) : this.setState({cc_os:event.target.value*0.05})}
//credit card outstanding calculation end

//GoldLoan Calculation start
GL_PLS=(event)=>{ glpls>0 ? this.setState({go_l:glpls +event.target.value*0.015}) : this.setState({go_l:event.target.value*0.015})}
//GoldLoan Calculation end

 
//adders button start 
addfun=(w)=>{
  if(w==="EMI_Pay"){
    emipls=this.state.EMI_Pay
    }else if(w==="cc_os"){
    ccospls=this.state.cc_os
    }else if(w==="go_l"){
    glpls=this.state.go_l
    }
  }

adderBut=(id)=>{
    let v_Pay= document.getElementById(`${id}`)
    this.addfun(id);
    v_Pay.value="";
    v_Pay.focus();
    v_Pay.select();
  }
//adder button  end
render(){ 
 return ( 
  <div>
   
    <div className="App bg-white mw9 center br4 shadow-2">
    <SlideInput netSal={this.netSal} netsalVal={this.state.netSal}/>

    <CalObli
      EMI_Pay={this.EMI_Pay} 
      adderBut={this.adderBut}
      totEmi={this.state.EMI_Pay}
      CC_OS ={this.CC_OS}
      totCc={this.state.cc_os}
      GL_PLS={this.GL_PLS}
      totgol={this.state.go_l}
      mulVal={this.mulVal}
      MulValSta={this.state.mulVal}
      exRoi={this.exRoi}
      expInVal={this.state.expRoi}
      netSal={this.state.netSal}
      hlfix={this.hlfix}
      ipIsVal={this.ipIsVal}
      ipState={this.state.ipIsVal}
      Re_set={this.Re_set}
       />

       <FoirTable 
        netSal={this.state.netSal}
        totEmi={this.state.EMI_Pay}
        totCc={this.state.cc_os}
        totgol={this.state.go_l}
        expInVal={this.state.expRoi}
        hmLn={this.state.hmLn}

        />

    </div> 





    
  </div>
  
  );

  }
}
export default App;
