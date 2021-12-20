import List from './List';

export default function Container(props) {
	const { contents, editContent, deleteContent } = props
	return(
		<div className="contents">
			<ul>
				{contents.map((content, index) => <List key={ content.id } index={index} content={ content } editContent={editContent} deleteContent={deleteContent}  />)}
			</ul>
		</div>
	);
}
