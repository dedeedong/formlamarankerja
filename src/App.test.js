import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App';

test('Render Form Isian Pelamar', () => {
  render(<App />);
  const linkElement = screen.getByText(/Form Isian Pelamar/i);
  expect(linkElement).toBeInTheDocument();
});

test('Form Submit Tanpa Input', () => {
  render(<App />);
  fireEvent.click(screen.getByText(/Submit/i))
  waitFor(() => {
    expect(getByText('Lengkapi Form')).toBeInTheDocument()
  })
});

test('Form Submit Dengan Input', () => {
  render(<App />);
  // const input = screen.getByTestId('nama-lengkap')
  // fireEvent.change(input, {target: {value: 'Puntadewa'}})
  // console.log(input)
  fireEvent.change(screen.getByTestId('nama-lengkap'), {target: {value: 'Puntadewa'}})
  fireEvent.click(screen.getByLabelText('Laki - Laki'), {target: {value: 'male'}})
  fireEvent.click(screen.getByLabelText('Islam'), {target: {value: 'Islam'}})
  fireEvent.click(screen.getByLabelText('Indonesia'), {target: {value: 'Indonesia'}})
  fireEvent.change(screen.getByTestId('tempat-lahir'), {target: {value: 'Surabaya'}})
  fireEvent.change(screen.getByTestId('tanggal-lahir'), {target: {value: '1999-03-12'}})
  fireEvent.change(screen.getByLabelText('Alamat'), {target: {value: 'Kota Bandung'}})
  fireEvent.click(screen.getByLabelText('Digital Marketing'), {target: {value: 'Digital Marketing'}})
  fireEvent.click(screen.getByLabelText('1 Minggu'), {target: {value: '1 Minggu'}})
  fireEvent.click(screen.getByText(/Submit/i))
  waitFor(() => {
    expect(getByText('Form Telah Tersubmit')).toBeInTheDocument()
  })
});
