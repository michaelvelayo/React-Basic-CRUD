import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from './components/Container';
import Form from './components/Form';
import Alert from './components/Alert';
import './App.css';


export default class App extends Component {
	state = {
		contents: [
			{ id: uuidv4(), text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
			{ id: uuidv4(), text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." },
			{ id: uuidv4(), text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old." },
			{ id: uuidv4(), text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable" }
		],
		message: "",
		id: "",
		text: ""
	}

	createContent = (e) => {
		if (this.state.text === ""){
			this.setState({error: true, message: "Field must not be empty"})
		}else{
			let content = {id: uuidv4(), text: this.state.text};
			this.setState({contents: [...this.state.contents, content], message: "", text: ""});
		}
		e.preventDefault();
	}

	editContent = (param) => {
		let content = this.state.contents.find( ({id}) => id === param );
		this.setState({id: content.id, text: content.text});
	}

	updateContent = (e) => {
		if (this.state.text === ""){
			this.setState({error: true, message: "Field must not be empty"})
		}else{
			let contents = [...this.state.contents];
			let index = contents.findIndex( ({id}) => id === this.state.id );
			contents[index] = {...contents[index], text: this.state.text}
			this.setState({contents, message: "", id: "", text: ""});
		}
		e.preventDefault();
	}

	deleteContent = (param) => {
		this.setState({contents: this.state.contents.filter(content => content.id !== param)})
		if(param === this.state.id){
			this.setState({id: "", text: ""});
		}
	}

	handleChange = (e) => {
		this.setState({text: e.target.value});
	}

	render() {
		return (
			<>
			<div className="header">
				<h1 className="header-text">React CRUD</h1>
			</div>
			<Container contents={ this.state.contents } editContent={ this.editContent } deleteContent={ this.deleteContent } />
			<Alert message={this.state.message} />
			<Form id={ this.state.id } text={this.state.text} handleChange={this.handleChange} createContent={this.createContent} updateContent={this.updateContent} />
			</>
		);
	}
}
