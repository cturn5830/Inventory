import { useState } from "react";
import EditProduct from "./EditProduct";

export default function ProductDisplay(props) {
    const { Product, Brand, Amount, Size, Location, Campaign, SGA, Retail, Year, createdAt} = props.product;
    const DocId= props.product.id;
    let DivID = 'EditProduct'+createdAt;
    let EditCheck = 'false';
    
    const [displayState, setdisplayState ] =useState ('500vh');
    
    return (<>
      <div className='prodDescList' id={createdAt}>
      <h3>{Product}</h3>
        <p>{Brand}</p>
        <p>{Amount}</p>
        <p>{Size}</p>
        <p>{Location}</p>
        <p>{Campaign}</p>
        <p>{SGA}</p>
        <p>{Retail}</p>
        <p>{Year}</p>
        <button className="editdocBTN" onClick={()=>{
          if(EditCheck === 'false'){
            EditCheck = 'true';
            setdisplayState('0');
            console.log('EditCheck='+EditCheck);
          }
          else{
            EditCheck = 'false';
            setdisplayState('500vh');
            console.log('EditCheck='+EditCheck);
          }
        }}>EDIT</button>
      </div>

      <div className='EditProduct'id={DivID} style={{top:displayState}}>
      <EditProduct DocId={DocId}
      
      productValue={{Product, Brand, Amount, Size, Location, Campaign, SGA, Retail, Year, createdAt}}
      />
        <button className="editdocBTN" onClick={
          ()=>{
            setdisplayState('500vh');}
        }>
          Close
        </button>
      </div>
    </>)
  }