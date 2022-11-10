import { useState } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { addDoc } from "firebase/firestore";
import { inventory } from "../Firebase/db";

export default function AddInventory(props) {
    // ... omitted
    const movement = props.movement;
    const cancelBTN = props.cancelBTN;

    const [formValue1, setFormValue1] = useState('');
    const [formValue2, setFormValue2] = useState('');
    const [formValue3, setFormValue3] = useState('');
    const [formValue4, setFormValue4] = useState('');
    const [formValue5, setFormValue5] = useState('');
    const [formValue6, setFormValue6] = useState('');
    const [formValue7, setFormValue7] = useState('');
    const [formValue8, setFormValue8] = useState('');
    const [formValue9, setFormValue9] = useState('');
  
    const newProduct = {
      Product: formValue1,
      Brand:formValue2,
      Amount:formValue3,
      Size:formValue4,
      Location:formValue5,
      Campaign:formValue6,
      SGA:formValue7,
      Retail:formValue8,
      Year:formValue9,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    }

    const SendInventory = async (e) => {
      e.preventDefault();
  
      setFormValue1('');
      setFormValue2('');
      setFormValue3('');
      setFormValue4('');
      setFormValue5('');
      setFormValue6('');
      setFormValue7('');
      setFormValue8('');
      setFormValue9('');
    }
   
  
    return (<>
  <div id='ProductEntriesWrapper' style={{top:movement}}>
      <form className="ProductEntries" onSubmit={SendInventory}>
        <h3>Product</h3>
        <input value={formValue1} onChange={(e) => setFormValue1(e.target.value)} placeholder="Product" />
        <h3>Brand</h3>
        <input value={formValue2} onChange={(e) => setFormValue2(e.target.value)} placeholder="Brand" />
        <h3>Amount</h3>
        <input value={formValue3} onChange={(e) => setFormValue3(e.target.value)} placeholder="Amount" />
        <h3>Size</h3>
        <input value={formValue4} onChange={(e) => setFormValue4(e.target.value)} placeholder="Size" />
        <h3>Location</h3>
        <input value={formValue5} onChange={(e) => setFormValue5(e.target.value)} placeholder="Location" />
        <h3>Campaign</h3>
        <input value={formValue6} onChange={(e) => setFormValue6(e.target.value)} placeholder="Campaign" />
        <h3>SGA</h3>
        <input value={formValue7} onChange={(e) => setFormValue7(e.target.value)} placeholder="SGA" />
        <h3>Retail</h3>
        <input value={formValue8} onChange={(e) => setFormValue8(e.target.value)} placeholder="Retail" />
        <h3>Year</h3>
        <input value={formValue9} onChange={(e) => setFormValue9(e.target.value)} placeholder="Year" />
  <br/>
        <button type="submit" disabled={!formValue1 && !formValue2 && !formValue3 && !formValue4 && !formValue5 && !formValue6 && !formValue7 && !formValue8 && !formValue9} onClick={
          ()=>{addDoc(inventory, newProduct)}}>Submit</button>
        {cancelBTN}
      </form>
  </div>
    </>)
  }