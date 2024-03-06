import cl from "./textEditor.module.css"

const TextEditor = () => {
	return (
		<>
			<textarea className={cl.editor__aria} placeholder="Начните что-то писать..."/>
			<div className={cl.editor__toolbar__container}>
				<div className={cl.editor__toolbar}>
					тут будут кнопки
				</div>
			</div>
		</>
	)
}

export default TextEditor