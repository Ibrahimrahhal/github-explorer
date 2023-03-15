import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/button';
import styles from '@/components/button/index.module.scss';

describe('Components', () => {
    describe('Button', () => {
        it('should render the children', () => {
            render(<Button>Click me!</Button>);
            expect(screen.getByText('Click me!')).toBeInTheDocument();
        });

        it('should apply the correct color class', () => {
            render(<Button color="secondary">Click me!</Button>);
            const button = screen.getByRole('button');
            expect(button).toHaveClass(
                styles.button,
                styles['button--secondary']
            );
        });

        it('should apply the correct size class', () => {
            render(<Button size="large">Click me!</Button>);
            const button = screen.getByRole('button');
            expect(button).toHaveClass(styles.button, styles['button--large']);
        });

        it('should apply the correct variant class', () => {
            render(<Button variant="outlined">Click me!</Button>);
            const button = screen.getByRole('button');
            expect(button).toHaveClass(
                styles.button,
                styles['button--outlined']
            );
        });

        it('should call the onClick function when the button is clicked', () => {
            const onClick = jest.fn();
            render(<Button onClick={onClick}>Click me!</Button>);
            const button = screen.getByRole('button');
            if (button) button.click();
            expect(onClick).toHaveBeenCalled();
        });

        it('should pass through any additional props to the button element', () => {
            render(<Button data-testid="test-button">Click me!</Button>);
            const button = screen.getByTestId('test-button');
            expect(button).toBeInTheDocument();
        });

        it('should add any additional class names provided', () => {
            render(<Button className="custom-class">Click me!</Button>);
            const button = screen.getByRole('button');
            expect(button).toHaveClass(styles.button, 'custom-class');
        });
    });
});
