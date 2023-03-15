import { render } from '@testing-library/react';
import { SpacingHOC } from '@/components/spacing';

const MockComponent = (props: React.HTMLAttributes<HTMLDivElement>) => (
    <div {...props}>Mock Component</div>
);

const SpacingMockComponent = SpacingHOC(MockComponent);

describe('Components', () => {
    describe('SpacingHOC', () => {
        it('renders without props', () => {
            const { container } = render(<SpacingMockComponent />);
            expect(container.children[0].getAttribute('style')).toBeNull();
        });

        it('renders with padding prop', () => {
            const { container } = render(<SpacingMockComponent padding={2} />);
            expect(container.firstChild).toHaveStyle('padding: 16px;');
        });

        it('renders with margin prop', () => {
            const { container } = render(
                <SpacingMockComponent margin={[1, 2]} />
            );
            expect(container.firstChild).toHaveStyle('margin: 8px 16px;');
        });

        it('renders with padding and margin props', () => {
            const { container } = render(
                <SpacingMockComponent padding={2} margin={[1, 2]} />
            );
            expect(container.firstChild).toHaveStyle(
                'padding: 16px; margin: 8px 16px;'
            );
        });
    });
});
