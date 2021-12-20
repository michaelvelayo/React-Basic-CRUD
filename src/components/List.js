import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

export default function List(props) {
	const { id, text } = props.content
	return(
		<li>
			<span>{ props.index + 1 }.)</span>
			{ text } 
			<button className="btn btn-edit" onClick={ () => props.editContent(id) } ><AiFillEdit /></button>
			<button className="btn btn-destroy" onClick={ () => props.deleteContent(id) }><AiFillDelete /></button>
		</li>
	);	
}