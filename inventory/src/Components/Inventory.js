import AddInventory from "./AddInventory";
import btnIMG from '../img/add.png';
import ProductDisplay from "./ProductDisplay";
import { useEffect, useState } from "react";
import {inventory} from '../Firebase/db';
import { getDocs } from "firebase/firestore";
let AddCheck = 'false';
export default function Inventory() {
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading ] =useState (true);
  
  useEffect( ()=>{

    async function getData() {
      const snapshot = await getDocs(inventory);
      const data = snapshot.docs.map(doc => {
      const newDoc = {
        id: doc.id,
        ...doc.data()
      }
      return newDoc
    })

    setProducts(data)

    
    }

    getData();
    setLoading(false)
    

  },[] );

    return (
    <>
    <main>
    {loading && <div>Products are loading</div>}
      {!loading && products.length > 0 &&
      <>
      <div className='prodDescList'>
      <h3>Product</h3>
        <p>Brand</p>
        <p>Amount</p>
        <p>Size</p>
        <p>Location</p>
        <p>Campaign</p>
        <p>SGA</p>
        <p>Retail</p>
        <p>Year</p>
        <p>Id</p>
        <p>EDIT</p>
      </div>
        {products && products.map(prod => <ProductDisplay key={prod.id} product={prod} />)}
        </>
      }
  
  
        { <div className="addremoveWrapper">
          <button onClick={()=>{
            const AddWrapper = document.getElementById('ProductEntriesWrapper');
            const removeBTN = document.getElementById('removeBTN');
            
            if(AddCheck==='true'){
              AddCheck='false';
              AddWrapper.style.top='500vh'
              removeBTN.style.top='0'
              console.log('Add check is set to '+AddCheck)
            }
            else{
              AddCheck='true';
              AddWrapper.style.top='0'
              removeBTN.style.top='500px'

              console.log('Add check is set to '+AddCheck)
            }
            
          }} className="addBTN ADDremove"><img src={btnIMG} alt='Add'/></button>
          <button className="removeBTN ADDremove" id='removeBTN'><img src={btnIMG} alt='X'/></button>
        </div>
         }
      <AddInventory/>
         
      </main>
    </>)
  }
  