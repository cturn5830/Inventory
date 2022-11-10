import AddInventory from "./AddInventory";
import btnIMG from '../img/add.png';
import ProductDisplay from "./ProductDisplay";
import { useEffect, useState } from "react";
import {inventory} from '../Firebase/db';
import { getDocs } from "firebase/firestore";

export default function Inventory() {
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading ] = useState(true);
  
    const [wrapper, setWrapper ] = useState('200vh');
    const [addBTN, setAddBTN ] = useState('0');
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
        <p>EDIT</p>
      </div>
        {products && products.map(prod => <ProductDisplay key={prod.id} product={prod} />)}
        </>
      }
  
  
        { <div className="addremoveWrapper">
          <button onClick={()=>{
              setWrapper('0')
              setAddBTN('150px')
          }} style={{top:addBTN}} className="addBTN ADDremove">
            <img src={btnIMG} alt='Add' />
            </button>
        </div>
         }
      <AddInventory movement={wrapper} cancelBTN={cancelBTN()}
      />
      </main>
    </>)
    function cancelBTN(){
      return(<>
      <button onClick={()=>{setWrapper('200vh')
      setAddBTN('0')}}>
        Cancle
      </button>
      
      </>)
    }
  }
  

