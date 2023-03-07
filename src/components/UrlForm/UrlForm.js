import React, { Component, useState } from 'react';

export default function UrlForm(props) {
	const [title, setTitle] = useState('')
	const [long_url, setLong_url] = useState('')
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
			long_url,
		}
    clearInputs();
		props.addUrl(newUrl)
  }

  const clearInputs = () => {
		setTitle('')
		setLong_url('')
    // this.setState({title: '', urlToShorten: ''});
  }

  // render() {
    return (
      <form>
        <input className='title'
          type=''
          placeholder='Title...'
          name='title'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <input className='long-url'
          type=''
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={long_url}
          onChange={e => setLong_url(e.target.value)}
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
