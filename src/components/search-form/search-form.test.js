import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchForm } from "./search-form";

describe('Search Form', () => {
	it('has a button', () => {
		render(<SearchForm />);
		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
	});

	it('has a default label', () => {
		render(<SearchForm />);
		const input = screen.getByLabelText('Search');
		expect(input).toBeInTheDocument();
	});

	it('has a custom label', () => {
		render(<SearchForm label="Search Now" />);
		const input = screen.getByLabelText('Search Now');
		expect(input).toBeInTheDocument();
	});

	it('sends search term on submit', async () => {
		const handleSearch = jest.fn()
		const searchPhrase = 'search phrase';
		render(<SearchForm onSearch={handleSearch} />);

		await userEvent.type(screen.getByLabelText('Search'), searchPhrase);
		await userEvent.click(screen.getByRole('button'));

		expect(handleSearch).toBeCalledTimes(1);
		expect(handleSearch).toBeCalledWith(searchPhrase);
	});
});
