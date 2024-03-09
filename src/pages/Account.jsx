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

const Account = () => {
    const router = useHistory()
    const backToMainPage = () => {
        router.replace("/tabs/notes")
    }
    const logOut = () => {
        router.replace("/login")
    }
    const toggleTheme = (value) => {
        document.body.classList.toggle("dark")
    }
    return (
        <IonPage>
            <IonContent>
                <div className={"headerAcc"}>
                    {/*<IonButton onClick={backToMainPage} fill={'clear'} color={'dark'}> <IonIcon slot={"icon-only"} icon={arrowBackOutline}></IonIcon></IonButton>*/}
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
                            <IonInput label="Логин" placeholder="Ваше имя   " disabled/>
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
                                <IonSelectOption value="light">Тёмная</IonSelectOption>
                                <IonSelectOption value="dark">Светлая</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                    </IonList>
                </div>
            </IonContent>
        </IonPage>
    )
}
export default Account;
