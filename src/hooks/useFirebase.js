import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,signOut  } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({});

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
            })
    }

    const logOut = () =>{
          signOut(auth)
          .then( () =>{
                setUser({});
          })
    }
   // observe wether user auth state change or not 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user);
            } 
            
          });
          
    }, [])

    return{
        user,
        logOut,
        signInUsingGoogle
    }
}

export default useFirebase;