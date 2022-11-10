import { useState } from "react";
import {deleteDoc} from "firebase/firestore";
import 'firebase/compat/firestore';

export default function DeleteProduct(props){
  const DocLocate = props.Locate;

  const [deleteCheck, setDeleteCheck] = useState('150vh');

    return(<>
    <button onClick={()=>{
      setDeleteCheck('90vh')
    }}>
      Delete Product
    </button>

    <div className="deleteCheck" style={{top:deleteCheck}}>
    <button onClick={()=>{
      deleteDoc(DocLocate)
    }}>
      DELETE PRODUCT
    </button>
    <button onClick={()=>{
      setDeleteCheck('150vh')
    }}>
      Keep Product
    </button>
    </div>
    </>)
}

/*

*/