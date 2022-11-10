import { useState } from "react";
import {db } from "../Firebase/db";
import {updateDoc, doc } from "firebase/firestore";
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import DeleteProduct from "./DeleteProduct";

export default function EditProduct(props){
    const productValue= props.productValue

    const DocRef=props.DocId    

    const DocLocate = doc(db,'inventory',DocRef)

    const [Product, setProduct] = useState(productValue.Product);
    const [Brand, setBrand] = useState(productValue.Brand);
    const [Amount, setAmount] = useState(productValue.Amount);
    const [Size, setSize] = useState(productValue.Size);
    const [Location, setLocation] = useState(productValue.Location);
    const [Campaign, setCampaign] = useState(productValue.Campaign);
    const [SGA, setSGA] = useState(productValue.SGA);
    const [Retail, setRetail] = useState(productValue.Retail);
    const [Year, setYear] = useState(productValue.Year);

    const edits = {
        Product: Product,
        Brand:Brand,
        Amount:Amount,
        Size:Size,
        Location:Location,
        Campaign:Campaign,
        SGA:SGA,
        Retail:Retail,
        Year:Year,
        editAt: firebase.firestore.FieldValue.serverTimestamp(),
      }
    const SendInventory = async (e) => {
        e.preventDefault();
        
    }

    return(<>
    <form className="ProductEntries" onSubmit={SendInventory}>
        <h1>Edit Product</h1>
        <h3>Product</h3>
        <input value={Product} onChange={(e) => setProduct(e.target.value)} placeholder="Product" />
        <h3>Brand</h3>
        <input value={Brand} onChange={(e) => setBrand(e.target.value)} placeholder="Brand" />
        <h3>Amount</h3>
        <input value={Amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
        <h3>Size</h3>
        <input value={Size} onChange={(e) => setSize(e.target.value)} placeholder="Size" />
        <h3>Location</h3>
        <input value={Location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
        <h3>Campaign</h3>
        <input value={Campaign} onChange={(e) => setCampaign(e.target.value)} placeholder="Campaign" />
        <h3>SGA</h3>
        <input value={SGA} onChange={(e) => setSGA(e.target.value)} placeholder="SGA" />
        <h3>Retail</h3>
        <input value={Retail} onChange={(e) => setRetail(e.target.value)} placeholder="Retail" />
        <h3>Year</h3>
        <input value={Year} onChange={(e) => setYear(e.target.value)} placeholder="Year" />
  <br/>
        <button type="submit" disabled={!Product && !Brand && !Amount && !Size && !Location && !Campaign && !SGA && !Retail && !Year} onClick={
          ()=>{updateDoc(DocLocate, edits)}
          
          }>Update</button>
           </form>
<DeleteProduct Locate={DocLocate}/>
           
</>)
}