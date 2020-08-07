import React from 'react'
import { render } from '@testing-library/react'
import Header from './Header'

test('renders masthead', () => {
    const { getByText } = render(<Header />)
    const masthead = getByText(/holmes/i)
    expect(masthead).toBeInTheDocument()
})
