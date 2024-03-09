import {
    IonActionSheet,
    IonButton,
    IonContent,
    IonIcon,
    IonInput,
    IonItem,
    IonList,
    IonPage,
    IonText
} from "@ionic/react";
import {arrowBackOutline, createOutline, heartOutline, readerOutline, heart, ellipsisVertical} from "ionicons/icons";
import 'suneditor/dist/css/suneditor.min.css';
import TextEditor from "../components/TexEditor/TextEditor.jsx";
import {useHistory} from "react-router-dom";
import {useState} from "react";

const Note = () => {
    const router = useHistory()
    const backToMainPage = () => {
        router.replace("/")
    }
    const [isFavorite, setIsFavorite] = useState(false);
    const history = useHistory();

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <IonPage>
            <IonContent style={{position: "relative"}}>
                <div className={"headerNote"}>
                    <IonButton onClick={backToMainPage} fill={'clear'} color={'dark'}>
                        <IonIcon slot={"icon-only"}
                                 icon={arrowBackOutline}/>
                    </IonButton>
                    <div className={"headerNotes"}>
                        <IonButton onClick={handleFavoriteClick} fill={'clear'} color={'dark'}>
                            <IonIcon
                                slot={"icon-only"}
                                icon={isFavorite ? heart : heartOutline}
                                color={isFavorite ? 'danger' : 'dark'}/>
                        </IonButton>
                        <IonButton id="open-sheet" fill={'clear'} color={'dark'}>
                            <IonIcon
                                slot={"icon-only"}
                                icon={ellipsisVertical}
                                />
                        </IonButton>

                    </div>
                </div>
                <div className={"text"}>
                    <IonInput placeholder="Заголовок" style={{fontSize: 32}}/>
                    <TextEditor/>
                </div>
            </IonContent>
            <IonActionSheet
                trigger="open-sheet"
                header="Действия с заметкой"
                buttons={[
                    {
                        text: 'Удалить',
                        role: 'destructive',
                        data: {
                            action: 'delete',
                        },
                    },
                    {
                        text: 'Поделиться',
                        data: {
                            action: 'share',
                        },
                    },
                    {
                        text: 'Отменить',
                        role: 'cancel',
                        data: {
                            action: 'cancel',
                        },
                    },
                ]}
            />
        </IonPage>
    )
}
export default Note;