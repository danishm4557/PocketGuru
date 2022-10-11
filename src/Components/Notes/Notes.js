import React, { useState, useEffect } from 'react';
import './Notes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { ToastBody } from 'react-bootstrap';

const Notes = () => {
	const [titlesList, setTitlesList] = useState([])
	const [viewChange, setViewChange] = useState(0)
	const [newNoteView, setNewNoteView] = useState(false)
	const [existingNoteView, setExistingNoteView] = useState(false)
	const [newNote, setNewNote] = useState("")
	const [existingNote, setExistingNote] = useState("")
	const [existingNoteID, setExistingNoteID] = useState("")
	const [today, setToday] = useState(Date())

	const localURL = process.env.REACT_APP_BASEURL


	//// Fetching list of all existing notes for Notes Home Page ////
	useEffect(() => {
		fetch(localURL + 'note', { mode: 'no-cors'})
		.then((response) => {
			if (!response.ok) {
			  throw new Error(`This is an HTTP error: The status is ${response.status}`)
			}
			return response.json()
		})
		.then((results) => {
		setTitlesList(results)
		console.log(results)
		})
		.catch((err) => {
		console.log(err.message)
		})
	}, [viewChange])
	//////////////////////////////////////////////////////////////






	////////////////// View Existing Note ////////////////////////
	const viewExistingNote = (singleNote) => {
		singleNote.preventDefault()
		console.log(singleNote)
		setExistingNote(singleNote.target.innerText)
		setExistingNoteView(true)
		console.log(Object.values(singleNote.target)[0].key)
		setExistingNoteID(Object.values(singleNote.target)[0].key)
	}
	//////////////////////////////////////////////////////////////
	





	//////// Setting value of New Note as it's being typed ////////
	const newNoteHandleChange = (event) => {
		console.log(event.target.value)
		setNewNote(event.target.value)
	}
	//////////////////////////////////////////////////////////////





	//////// Setting value of Existing Note as it's being typed ////////
	const existingNoteHandleChange = (event) => {
		// console.log(event.target.value)
		setExistingNote(event.target.value)
	}
	//////////////////////////////////////////////////////////////





	////////////// Adding New Note to the Database ///////////////
	const postNewNote = (e) => {
		e.preventDefault();
		// FETCH TO THE BACKEND
		fetch(localURL + 'note', {
			mode: 'no-cors',
			method: 'POST',
			body: JSON.stringify({
				note: newNote,
				date: Date(e.timeStamp)
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then( res => {
			return res.json()
		}).then(
			setNewNoteView(false),
			setViewChange(viewChange + 1)
		).catch (error => console.log(error))
		console.log(titlesList[titlesList.length-1])
		setExistingNoteView(false)
		setNewNote(false)
	}
	//////////////////////////////////////////////////////////////





	/////////////// Editing Note in the Database /////////////////
	const updateNote = (note) => {
		note.preventDefault()
		fetch(localURL + 'note/' + existingNoteID, {
		  mode: 'no-cors',
		  method: 'PUT',
		  body: JSON.stringify({note: note.target[0].value}),
		  headers: {
			'Content-Type': 'application/json'
		  }
		}).then(res => res.json())
		.then(resJson => {
		  console.log(resJson)
		  const copyTitlesList = [...titlesList]
		  const findIndex = titlesList.findIndex(
			title => title._id === resJson.data._id)
			copyTitlesList[findIndex] = resJson.data
			setTitlesList(copyTitlesList)
		})
		setExistingNoteView(false)
		setNewNote(false)
	  }



	// NOTES HOME PAGE
	if (newNoteView === false && existingNoteView === false) {
		return (
			<>
				<div className="">
					<div className="col-10 mx-auto py-2">
						<h1 className="px-4">Notes</h1>
					</div>
					<div className="col-10 rounded mx-auto anyClass overflow-auto h-568px">
						{titlesList.map((title) => (
							<div className="col-12 bg-secondary text-light border-top border-bottom overflow-hidden mx-auto py-2 px-4" key={title._id} onClick={(title) => viewExistingNote(title)}>
								{title.note.slice(0,100)}...
							</div>
						))
						}
					</div>
					<footer className="fixed-bottom d-flex justify-content-between col-10 bg-primary text-light mx-auto px-4 py-2">
						<div className="mx-auto align-self-center">
							{titlesList.length} Notes
						</div>
						<div className="btn btn-outline-light" onClick={() => setNewNoteView(true)}>
							New
						</div>
					</footer>
				</div>
			</>
		)
	} 
	// NEW NOTE
	else if (newNoteView === true) {
		return (
			<>
				<div className="col-10 mx-auto py-2">
					<h1 className="px-4">Notes</h1>
				</div>
				<div className="col-10 rounded mx-auto anyClass bg-secondary px-4">
					<form className="row" onSubmit={(e) => postNewNote(e)}>
						<div className="col-11 border-none text-light text-center my-2">{today}</div>
						<input type='textarea' id='newNote' name='newNote' className="h-500px col-12 bg-secondary text-light border-0" onChange={(event) => newNoteHandleChange(event)} />
						<button className="col-2 bg-danger text-light border border-light py-3" onClick={() => setNewNoteView(false)}>X</button>
						<input type="submit" value="Add New Note" className="col-10 bg-primary text-light border border-light py-3" />
					</form>
				</div>
			</>
		)
	}
	// EXISTING NOTE
	else {
		return (
			<>
				<div className="col-10 mx-auto py-2">
					<h1 className="px-4">Notes</h1>
				</div>
				<div className="col-10 rounded mx-auto anyClass bg-secondary px-4">
					<form className="row" onSubmit={(e) => updateNote(e)}>
						<div className="col-11 border-none text-light text-center my-2">{today}</div>
						<input type='textarea' id='newNote' name='newNote' className="h-500px col-12 bg-secondary text-light border-0" onChange={(event) => existingNoteHandleChange(event)} value={existingNote} />
						<button className="col-2 bg-danger text-light border border-light py-3" onClick={() => setExistingNoteView(false)}>X</button>
						<input type="submit" value="Finish Editing" className="col-10 bg-primary text-light border border-light py-3" />
					</form>
				</div>
			</>
		)
	}
}

export default Notes;