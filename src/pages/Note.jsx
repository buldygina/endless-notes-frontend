import {IonButton, IonContent, IonIcon, IonPage, IonText} from "@ionic/react";
import {arrowBackOutline, createOutline, heartOutline, readerOutline} from "ionicons/icons";
import 'suneditor/dist/css/suneditor.min.css';
import SunEditor from "suneditor-react";

const Note = () => {
    return (
        <IonPage>
            <IonContent>
                <div className={"headerNote"}>
                    <IonButton fill={'clear'} color={'dark'}><IonIcon slot={"icon-only"} icon={arrowBackOutline}></IonIcon></IonButton>
                <div className={"headerNotes"}>
                    <IonButton fill={'clear'} color={'dark'}><IonIcon slot={"icon-only"} icon={readerOutline}></IonIcon></IonButton>
                    <IonButton fill={'clear'} color={'dark'}><IonIcon slot={"icon-only"} icon={heartOutline}></IonIcon></IonButton>
                    <IonButton fill={'clear'} color={'dark'}><IonIcon slot={"icon-only"} icon={createOutline}></IonIcon></IonButton>
                </div>
                </div>
                <div className={"text"}>
                <IonText color="black">
                    <h1>Список продуктов</h1>
                </IonText>
                <IonText color="black">
                    <div>
                        <SunEditor
                            name={"Создать новость"}
                            lang="ru"
                            autoFocus
                            placeholder={"Начните печатать...."}
                            setOptions={{
                                buttonList: [
                                    ['undo', 'redo'],
                                    ['font', 'fontSize', 'formatBlock'],
                                    ['paragraphStyle', 'blockquote'],
                                    ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                                    ['fontColor', 'hiliteColor', 'textStyle'],
                                    ['removeFormat'],
                                    ['align', 'horizontalRule', 'list', 'lineHeight'],
                                    ['table', 'link', 'image'],
                                    ['showBlocks', 'codeView'],
                                ]
                            }}
                            setAllPlugins
                        />
                    </div>
                </IonText>
                </div>
            </IonContent>
        </IonPage>
    )
}
export default Note;