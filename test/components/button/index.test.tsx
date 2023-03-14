import { render, screen,  } from '@testing-library/react';
import {Button} from '@/components/button';
import '@testing-library/jest-dom';

describe('Components', () => {
    describe('Button', () => {
        it('renders a button', () => {
            render(<Button>Test</Button>);
            const button = screen.getByRole('button')
            expect(button).toBeInTheDocument()
        })
    });
});