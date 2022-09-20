import { useState } from 'react';

import { ReactComponent as SearchIconSvg } from './search-icon.svg'

import './search-form.css';

export const SearchForm = ({label, onSearch}) => {
	const [input, setInput] = useState('');

	const handleSearch = () => onSearch(input);
	const onChange = (e) => setInput(e.target.value);

	const fieldLabel = label || 'Search';

	return (
		<div className="search-form">
			<label htmlFor="search-form-field">{fieldLabel}</label>
			<input type="text" onChange={onChange} value={input} className="search-form-field" id="search-form-field" />
			<button onClick={handleSearch} className="search-form-button"><SearchIconSvg /></button>
		</div>
	)
}