

const TextEditor = () => {
	return (
		<>
			<textarea className={"editor__aria"} placeholder="Начните что-то писать..."/>
			<div className={"editor__toolbar__container"}>
				<div className={"editor__toolbar"}>
					тут будут кнопки
				</div>
			</div>
		</>
	)
}

export default TextEditor