import { useState } from 'react';

import { SearchForm } from 'components';
import { AthletesGrid, getAthletes } from 'features/users';
import { useEffect } from 'react';

export const AthletesPage = () => {
	const [search, setSearch] = useState('');
	const [athletes, setAthletes] = useState([]);

	// useEffect(() => {
	// 	return async () => {
	// 		const athletes = await getAthletes(search);
	// 		setAthletes(athletes);
	// 	}
	// }, [search])

	return (
		<>
			<SearchForm key="search" onSearch={search => setSearch(search)} />
			<AthletesGrid key="athletes-grid" athletes={athletes} />
		</>
	)
}