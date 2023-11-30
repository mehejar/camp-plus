import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, updateProfile } from "firebase/auth";
import { app } from "../../../firebase.config";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) =>{

    const [user, setUser] = useState(null);
    const axiosPublic = useAxiosPublic()
    const [loading, setLoading] = useState(true);
    // const axiosPublic = useAxiosPublic()

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('User Running', currentUser)
            
            if(currentUser){
                const userInfo = {email: currentUser.email}
                axiosPublic.post('/jwt', userInfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token);

                    }
                })
            }
            else{
                localStorage.removeItem('access-token');
            }

            setLoading(false);
        });
        return () => {
            return unsubcribe();
        }
    }, [])

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name, photo) =>{
        setLoading(true);
      return  updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const provider = new GoogleAuthProvider()

    const googleLogin = () =>{
        setLoading(true)
        signInWithPopup(auth, provider)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = {
        createUser,
        login,
        loading,
        user,
        logOut,
        googleLogin,
        updateUser

    }

    return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider