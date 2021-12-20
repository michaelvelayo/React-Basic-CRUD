export default function EditForm(props){
	if(props.id === ""){
		return(
			<>
				<h1>New</h1>
					<form>
					  <label>
					   	Text:
					    <input type="text" name="text" value={props.text} onChange={props.handleChange} />
					  </label>
					  <input type="submit" value="Add" onClick={props.createContent} />
					</form>
			</>
		);
	}else{
		return(
			<>
				<h1>Edit</h1>
					<form>
					  <label>
					   	Text:
					    <input type="text" name="text" value={props.text} onChange={props.handleChange} />
					  </label>
					  <input type="submit" value="Update" onClick={props.updateContent} />
					</form>
			</>
		);
	}
}
