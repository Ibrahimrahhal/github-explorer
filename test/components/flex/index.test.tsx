import { render } from '@testing-library/react';
import { Flex } from '@/components/flex';
import styles from '@/components/flex/index.module.scss';

describe('Components', () => {
    describe('Flex', () => {
        it('renders children', () => {
            const { getByText } = render(
                <Flex>
                    <div>Child 1</div>
                    <div>Child 2</div>
                </Flex>
            );
            expect(getByText('Child 1')).toBeInTheDocument();
            expect(getByText('Child 2')).toBeInTheDocument();
        });

        it('applies className prop', () => {
            const { container } = render(
                <Flex className="custom-class">
                    <div>Child</div>
                </Flex>
            );
            expect(container.firstChild).toHaveClass('custom-class');
        });

        it('applies direction prop', () => {
            const { container } = render(
                <Flex direction="column">
                    <div>Child</div>
                </Flex>
            );
            expect(container.firstChild).toHaveClass(styles['flex--column']);
        });

        it('applies wrap prop', () => {
            const { container } = render(
                <Flex wrap="wrap-reverse">
                    <div>Child</div>
                </Flex>
            );
            expect(container.firstChild).toHaveClass(
                styles['flex--wrap-reverse']
            );
        });

        it('applies justifyContent prop', () => {
            const { container } = render(
                <Flex justifyContent="center">
                    <div>Child</div>
                </Flex>
            );
            expect(container.firstChild).toHaveClass(
                styles['flex--justify-center']
            );
        });

        it('applies alignItems prop', () => {
            const { container } = render(
                <Flex alignItems="flex-end">
                    <div>Child</div>
                </Flex>
            );
            expect(container.firstChild).toHaveClass(
                styles['flex--align-flex-end']
            );
        });
    });
});
