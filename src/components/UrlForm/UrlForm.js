import React, { Component, useState } from 'react';

export default function UrlForm(props) {
	const [title, setTitle] = useState('')
	const [urlToShorten, setUrlToShorten] = useState('')
	// constructor(props) {
  //   super();
  //   this.props = props;
  //   this.state = {
  //     title: '',
  //     urlToShorten: ''
  //   };
  // }

  // handleNameChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // }

  const handleSubmit = e => {
    e.preventDefault();
		const newUrl = {
			id: Date.now,
			title,
			urlToShorten,
		}
    clearInputs();
		props.addUrl(newUrl)
  }

  const clearInputs = () => {
		setTitle('')
		setUrlToShorten('')
    // this.setState({title: '', urlToShorten: ''});
  }

  // render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={title}
          onChange={e => setTitle(e)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='title'
          value={title}
          onChange={e => setUrlToShorten(e)}
        />

        <button onClick={e => handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
    )
  }
// }
// class UrlForm extends Component {

// }

// export default UrlForm;
