import { cleanup, render, fireEvent } from '@testing-library/react';
import React from 'react';
import MyButton from './MyButton';

afterEach(cleanup);

test("Botão da aplicação tem o texto Clique me", () => {
    const { getByText } = render(<MyButton />);

    expect(getByText('Clique me')).toBeInTheDocument();
});

test("Botão da aplicação dispara evento click", () => {
    const { getByText } = render(<MyButton />);

    expect(getByText('Clique me')).toBeInTheDocument();

    fireEvent.click(getByText('Clique me'));

    expect(getByText('Desclique me')).toBeInTheDocument();
});

test("Botão da aplicação dispara toggle click", () => {
    const { getByText } = render(<MyButton />);

    expect(getByText('Clique me')).toBeInTheDocument();

    fireEvent.click(getByText('Clique me'));

    expect(getByText('Desclique me')).toBeInTheDocument();

    fireEvent.click(getByText('Desclique me'));

    expect(getByText('Clique me')).toBeInTheDocument();
});

test("Botão da aplicação testa a lista", () => {
    const { getByText } = render(<MyButton />);

    fireEvent.click(getByText('Clique me'));

    const { getAllByTestId } = render(<MyButton />);

    const nomes = getAllByTestId("pessoa-id").map(nome => nome.textContent);

    expect(nomes).toEqual([ 'Pessoa 1', 'Pessoa 2', 'Pessoa 3', 'Pessoa 4', 'Pessoa 5' ]);
});