import {IonButton, IonInput, IonItem, IonList, IonPage} from "@ionic/react";
import Uninote from "../assets/Union.svg?react";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {setUser} from "../store/slices/userSlice.js";

const Login = () => {
    const dispatch = useDispatch()
    const router = useHistory()
    const [username, setUsername] = useState('')
    const loginAccount = () => {
        console.log(username)
        dispatch(setUser({username:username}))
        router.replace('/')
    }
    return (
        <IonPage>
            <div className={"registration"}>
                <div className={"logo"}><Uninote/></div>
                <IonList>
                    <IonItem>
                        <IonInput onIonInput={(event)=> setUsername(event.target.value)} label="Username" placeholder="Enter your username"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput label="Password input" type="password" value="password"></IonInput>
                    </IonItem>
                </IonList>
                <IonButton onClick={loginAccount}>Login</IonButton>
            </div>
        </IonPage>
    )
}
export default Login;