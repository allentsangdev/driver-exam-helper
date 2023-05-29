import React, { useContext, useState, useEffect } from 'react'
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebase'

const FirestoreContext = React.createContext()

export function useFirestore() {
    return useContext(FirestoreContext)
}

export function FirestoreProvider({children}){
    
    async function addIssue(issueDescription){
        try {
            const docRef = await addDoc(collection(db, "issues"), {
              issueDescription: issueDescription
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }

    }

    const value = {
        addIssue
    }

    return(
        <FirestoreContext.Provider value={value}>
            {children}
        </FirestoreContext.Provider>
    )
}

