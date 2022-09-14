import { SearchForm } from '../components';

export const AthletesPage = () => {
	return (
		<SearchForm onSearch={(val) => {
			console.log(val);
		}} />
	)
}