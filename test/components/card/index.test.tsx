import { render, screen } from '@testing-library/react';
import { Card } from '@/components/card';

describe('Components', () => {
    describe('Card', () => {
        it('should render without crashing', () => {
            render(<Card />);
            const cardElement = screen.getByTestId('card');
            expect(cardElement).toBeInTheDocument();
        });

        it('should add custom className to the root element', () => {
            const customClassName = 'custom-class';
            render(<Card className={customClassName} />);
            const cardElement = screen.getByTestId('card');
            expect(cardElement).toHaveClass('card', customClassName);
        });

        it('should add margin and padding styles to the root element since it uses spacing hoc', () => {
            render(<Card margin={1} padding={[2, 3]} />);
            const cardElement = screen.getByTestId('card');
            expect(cardElement).toHaveStyle({
                margin: '8px',
                padding: '16px 24px'
            });
        });
    });
});
