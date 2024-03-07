import { IonButton, IonContent, IonIcon, IonInput, IonItem, IonList, IonPage, IonText } from "@ionic/react";
import { arrowBackOutline, createOutline, heartOutline, readerOutline } from "ionicons/icons";
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
		history.push('/favorite');
	};

	return (
		<IonPage>
			<IonContent style={{position: "relative"}}>
				<div className={"headerNote"}>
					<IonButton onClick={backToMainPage} fill={'clear'} color={'dark'}><IonIcon slot={"icon-only"}
																	  icon={arrowBackOutline}></IonIcon></IonButton>
					<div className={"headerNotes"}>
						<IonButton  onClick={handleFavoriteClick} fill={'clear'} color={'dark'}><IonIcon slot={"icon-only"}
																		  icon={heartOutline}></IonIcon></IonButton>
						<IonButton fill={'clear'} color={'dark'}><IonIcon slot={"icon-only"}
																		  icon={createOutline}></IonIcon></IonButton>
					</div>
				</div>
				<div className={"text"}>
					<IonInput placeholder="Заголовок" style={{fontSize: 32}}/>
					<TextEditor/>
				</div>
			</IonContent>
		</IonPage>
	)
}
export default Note;