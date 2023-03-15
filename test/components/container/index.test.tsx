import { Container } from '@/components/container';
import styles from '@/components/container/index.module.scss';

import { render } from '@testing-library/react';

describe('Components', () => {
    describe('Container', () => {
        it('should render without crashing', () => {
            const { container } = render(<Container />);
            expect(container.firstChild).toBeInTheDocument();
        });

        it('should add custom className to the root element', () => {
            const customClassName = 'custom-class';
            const { container } = render(
                <Container className={customClassName} />
            );
            expect(container.firstChild).toHaveClass(
                styles['container'],
                customClassName
            );
        });

        it('should add margin and padding styles to the root element since it uses spacing hoc', () => {
            const { container } = render(
                <Container margin={1} padding={[2, 3]} />
            );
            expect(container.firstChild).toHaveStyle({
                margin: '8px',
                padding: '16px 24px'
            });
        });
    });
});
