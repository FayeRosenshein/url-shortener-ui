import React, { Component, useEffect, useState } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export function App() {
	const [urls, setUrls] = useState([])
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     urls: []
  //   }
  // }
useEffect(() => {
	fetch('http://localhost:3001/api/v1/urls')
	.then(response => {
		if (response.ok) {
			return response.json()
		}})
	.then(response => {
		console.log(response.urls)
		setUrls(response.urls)
	
	})
},[])

const addUrl = (newUrl) => {
	console.log(newUrl)
	fetch('http://localhost:3001/api/v1/urls', {
		method: 'POST',
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify(newUrl)
	})
		.then(response => response.json())
		.then(response => {
			console.log(response)
		setUrls(prevUrls => [...prevUrls, response])})
}
  // componentDidMount() {
  // }

  // render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addUrl={addUrl}/>
        </header>

        <UrlContainer urls={urls}/>
      </main>
    );
  }
// }

export default App;
