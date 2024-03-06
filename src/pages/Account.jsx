import {
    IonButton,
    IonContent,
    IonIcon,
    IonInput,
    IonItem,
    IonList,
    IonPage,
    IonSelect,
    IonSelectOption
} from "@ionic/react";
import {arrowBackOutline, enterOutline} from "ionicons/icons";
import person from "../assets/person-circle-sharp .png"
import { useHistory } from "react-router-dom";
const Account = () => {
	const router = useHistory()
	const backToMainPage = () => {
		router.replace("/tabs/notes")
	}
	const logOut = () => {
		router.replace("/login")
	}
    return (
        <IonPage>
            <IonContent>
                <div className={"headerAcc"}>
            <IonButton onClick={backToMainPage} fill={'clear'} color={'dark'}> <IonIcon slot={"icon-only"} icon={arrowBackOutline}></IonIcon></IonButton>
            <div className={"account"}><img src={person} alt=""/></div>
            <IonButton onClick={logOut} fill={'clear'} color={'dark'}> <IonIcon slot={"icon-only"} icon={enterOutline}></IonIcon></IonButton>
                </div>
                <div className={"accountLog"}>
                <IonList>
                    <IonItem>
                        <IonInput label="Username" placeholder="Enter your username" disabled/>
                    </IonItem>
                    <IonItem>
                        <IonInput label="Email input" type="email" placeholder="email@domain.com" disabled/>
                    </IonItem>
                    <IonItem>
                        <IonInput label="Password input" type="password" value="password" disabled/>
                    </IonItem>
                </IonList>
                </div>
                <div className={"theme"}>
                <IonList>
                    <IonItem>
                        <IonSelect aria-label="Light/Dark theme" interface="popover" placeholder="Select theme">
                            <IonSelectOption value="light">Light theme </IonSelectOption>
                            <IonSelectOption value="dark">Dark theme</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                </IonList>
                </div>
            </IonContent>
        </IonPage>
    )
}
export default Account;
