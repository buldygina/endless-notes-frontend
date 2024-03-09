import {
    IonCard,
    IonCardContent,
    IonContent,
    IonFab,
    IonFabButton,
    IonIcon,
    IonPage,
    IonSearchbar,
    IonSegment,
    IonSegmentButton
} from "@ionic/react";
import { add, barbell, basket, call, globe, heart, home, person, pin, star, trash } from "ionicons/icons";
import {useHistory} from "react-router-dom";
const Notes = () => {
    const router = useHistory()
    const addNote = () => {
        router.replace("/note")
    }
    const readNote = () => {
        router.replace('/note')
    }
    return (
        <IonPage>
            <IonContent>
                <div className={"header"}>
                    <div className={"searchbar"}><IonSearchbar placeholder={"Поиск заметок"}/></div>
                </div>
                <div className={"segment"}>
                    <IonSegment scrollable={true} value="heart">
                        <IonSegmentButton value="home">
                            <IonIcon icon={home}></IonIcon>
                        </IonSegmentButton>
                        <IonSegmentButton value="heart">
                            <IonIcon icon={heart}></IonIcon>
                        </IonSegmentButton>
                        <IonSegmentButton value="pin">
                            <IonIcon icon={pin}></IonIcon>
                        </IonSegmentButton>
                        <IonSegmentButton value="star">
                            <IonIcon icon={star}></IonIcon>
                        </IonSegmentButton>
                        <IonSegmentButton value="call">
                            <IonIcon icon={call}></IonIcon>
                        </IonSegmentButton>
                        <IonSegmentButton value="globe">
                            <IonIcon icon={globe}></IonIcon>
                        </IonSegmentButton>
                        <IonSegmentButton value="basket">
                            <IonIcon icon={basket}></IonIcon>
                        </IonSegmentButton>
                        <IonSegmentButton value="barbell">
                            <IonIcon icon={barbell}></IonIcon>
                        </IonSegmentButton>
                        <IonSegmentButton value="trash">
                            <IonIcon icon={trash}></IonIcon>
                        </IonSegmentButton>
                        <IonSegmentButton value="person">
                            <IonIcon icon={person}></IonIcon>
                        </IonSegmentButton>
                    </IonSegment>
                </div>
                <div className={"notes"}>
                    <IonCard onClick={readNote}>
                        <IonCardContent>Записать идеи для нового проекта в блокнот.</IonCardContent>
                    </IonCard>
                    <IonCard onClick={readNote}>
                        <IonCardContent>Проверить актуальные новости перед обсуждением с коллегами на
                            собрании.</IonCardContent>
                    </IonCard>
                    <IonCard onClick={readNote}>
                        <IonCardContent>Проверить список покупок перед походом в магазин: молоко, яйца, хлеб,
                            фрукты.</IonCardContent>
                    </IonCard>
                    <IonCard onClick={readNote}>
                        <IonCardContent>Проверить график поездок на эту неделю и обновить бронирования при
                            необходимости.</IonCardContent>
                    </IonCard>
                    <IonCard onClick={readNote}>
                        <IonCardContent>Проверить состояние счета в банке и оплатить коммунальные
                            услуги.</IonCardContent>
                    </IonCard>
                    <IonCard onClick={readNote}>
                        <IonCardContent>Найти время для тихого отдыха и чтения новой книги.</IonCardContent>
                    </IonCard>
                    <IonCard onClick={readNote}>
                        <IonCardContent>Подготовить список вопросов для интервью с потенциальным кандидатом на
                            работу.</IonCardContent>
                    </IonCard>
                    <IonCard onClick={readNote}>
                        <IonCardContent>Напомнить другу о встрече и подтвердить место и время.</IonCardContent>
                    </IonCard>
                    <IonCard onClick={readNote}>
                        <IonCardContent>Подумать над идеями подарков к предстоящим праздникам для
                            близких.</IonCardContent>
                    </IonCard>
                    <IonCard onClick={readNote}>
                        <IonCardContent>Научиться новому навыку или языку, используя онлайн-ресурсы или
                            курсы.</IonCardContent>
                    </IonCard>
                </div>
                <IonFab  slot="fixed" vertical="bottom" horizontal="end" >
                    <IonFabButton onClick={addNote}>
                        <IonIcon icon={add}></IonIcon>
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    )
}
export default Notes;
