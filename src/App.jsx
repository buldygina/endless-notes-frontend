import {
    IonContent,
    IonPage,
    IonSearchbar,
    IonIcon,
    IonSegment,
    IonSegmentButton,
    IonButton,
    IonCard, IonCardContent, IonFab, IonFabButton
} from "@ionic/react";
import { home, heart, pin, star, call, globe, basket, barbell, trash, person, notificationsOutline, add } from  'ionicons/icons';
import "./App.css"



function App() {

  return (
    <IonPage>
        <IonContent>
            <div className={"header"}>
           <div className={"searchbar"}> <IonSearchbar></IonSearchbar></div>
               <div className={"notification"}><IonButton fill={'clear'} color={'dark'}> <IonIcon slot={"icon-only"} icon={notificationsOutline}></IonIcon></IonButton></div></div>
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
            <IonCard>
                <IonCardContent>Записать идеи для нового проекта в блокнот.</IonCardContent>
            </IonCard>
            <IonCard>
                <IonCardContent>Проверить актуальные новости перед обсуждением с коллегами на собрании.</IonCardContent>
            </IonCard>
            <IonCard>
                <IonCardContent>Проверить список покупок перед походом в магазин: молоко, яйца, хлеб, фрукты.</IonCardContent>
            </IonCard>
            <IonCard>
                <IonCardContent>Проверить график поездок на эту неделю и обновить бронирования при необходимости.</IonCardContent>
            </IonCard>
            <IonCard>
                <IonCardContent>Проверить состояние счета в банке и оплатить коммунальные услуги.</IonCardContent>
            </IonCard>
            <IonCard>
                <IonCardContent>Найти время для тихого отдыха и чтения новой книги.</IonCardContent>
            </IonCard>
            <IonCard>
                <IonCardContent>Подготовить список вопросов для интервью с потенциальным кандидатом на работу.</IonCardContent>
            </IonCard>
            <IonCard>
                <IonCardContent>Напомнить другу о встрече и подтвердить место и время.</IonCardContent>
            </IonCard>
            <IonCard>
                <IonCardContent>Подумать над идеями подарков к предстоящим праздникам для близких.</IonCardContent>
            </IonCard>
            <IonCard>
                <IonCardContent>Научиться новому навыку или языку, используя онлайн-ресурсы или курсы.</IonCardContent>
            </IonCard>
            </div>
            <IonFab slot="fixed" vertical="bottom" horizontal="end">
                <IonFabButton>
                    <IonIcon icon={add}></IonIcon>
                </IonFabButton>
            </IonFab>

        </IonContent>
    </IonPage>
  )
}

export default App
