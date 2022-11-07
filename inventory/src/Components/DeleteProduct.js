import { useState } from "react";
import { inventory, db } from "../Firebase/db";
import {deleteDoc, doc } from "firebase/firestore";
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';

export default function DeleteProduct(props){
  const DocLocate = props.Locate;
    return(<>
    <button onClick={()=>{
      deleteDoc(DocLocate)
    }}>
      DELETE PRODUCT
    </button>
    </>)
}

/*

*/