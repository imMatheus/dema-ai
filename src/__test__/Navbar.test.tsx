import { Navbar } from '@/components/Navbar'
import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

describe('Navbar component', () => {
	it('should render with correct text', () => {
		render(
			<BrowserRouter>
				<Navbar />
			</BrowserRouter>
		)

		expect(screen.getByText(/The Beer Bible/i)).toBeTruthy()
		expect(screen.getByPlaceholderText(/search for a beer.../i)).toBeTruthy()
	})
	it('should be able to type in input box', () => {
		render(
			<BrowserRouter>
				<Navbar />
			</BrowserRouter>
		)

		const searchInput: HTMLInputElement = screen.getByPlaceholderText(/search for a beer.../i)

		fireEvent.change(searchInput, { target: { value: 'Hello Dema.ai' } })
		expect(searchInput.value).toBe('Hello Dema.ai')
	})
})
