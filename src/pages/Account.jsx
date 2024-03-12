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
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";

const Account = () => {
    const router = useHistory()
    const {username} = useSelector(state => state.user)
    const backToMainPage = () => {
        router.replace("/tabs/notes")
    }
    const logOut = () => {
        router.replace("/login")
    }
    const toggleTheme = (value) => {
        if (value === "dark") document.body.classList.add("dark")
        else (document.body.classList.remove("dark"))
    }
    return (
        <IonPage>
            <IonContent>
                <div className={"headerAcc"}>
                    <div className={"account"}>
                        <img src={person} alt=""/>
                    </div>
                    <IonButton className={"logoutButton"} onClick={logOut} fill={'clear'} color={'dark'}>
                        <IonIcon slot={"icon-only"} icon={enterOutline}/>
                    </IonButton>
                </div>
                <div className={"accountLog"}>
                    <IonList>
                        <IonItem>
                            <IonInput value={username} label="Логин" placeholder="Ваше имя   " disabled/>
                        </IonItem>
                        <IonItem>
                            <IonInput label="Почта" type="email" placeholder="email@domain.com" disabled/>
                        </IonItem>
                        <IonItem>
                            <IonInput label="Пароль" type="password" value="password" disabled/>
                        </IonItem>
                    </IonList>
                </div>
                <div className={"theme"}>
                    <IonList>
                        <IonItem>
                            <IonSelect
                                aria-label="Light/Dark theme"
                                interface="popover"
                                placeholder="Выбрать тему"
                                onIonChange={(e) => toggleTheme(e.detail.value)}
                            >
                                <IonSelectOption value="light">Светлая</IonSelectOption>
                                <IonSelectOption value="dark">Тёмная</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                    </IonList>
                </div>
            </IonContent>
        </IonPage>
    )
}
export default Account;
