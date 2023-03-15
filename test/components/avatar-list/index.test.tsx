import { render, screen } from '@testing-library/react';
import styles from '@/components/avatar-list/index.module.scss';
import { AvatarList } from '@/components/avatar-list';

const testAvatars = [
    {
        src: 'avatar1.png',
        alt: 'Avatar 1'
    },
    {
        src: 'avatar2.png',
        alt: 'Avatar 2'
    },
    {
        src: 'avatar3.png',
        alt: 'Avatar 3'
    }
];
describe('Components', () => {
    describe('AvatarList', () => {
        it('should render the correct number of avatars', () => {
            render(<AvatarList avatars={testAvatars} />);
            const avatars = screen.getAllByRole('img');
            expect(avatars).toHaveLength(3);
        });

        it('should pass the correct props to the Avatar component', () => {
            render(<AvatarList avatars={testAvatars} size="small" />);
            const avatars = screen.getAllByRole('img');
            expect(avatars[0]).toHaveAttribute('src', 'avatar1.png');
            expect(avatars[0]).toHaveAttribute('alt', 'Avatar 1');
            expect(avatars[0].parentElement).toHaveClass(
                styles.avatar,
                styles['avatar--small']
            );
        });

        it('should apply any additional props to the Flex component', () => {
            render(
                <AvatarList
                    avatars={testAvatars}
                    data-testid="test-avatar-list"
                />
            );
            const flex = screen.getByTestId('test-avatar-list');
            expect(flex).toBeInTheDocument();
        });

        it('should apply the correct styling to the avatars', () => {
            render(<AvatarList avatars={testAvatars} />);
            const avatars = screen.getAllByRole('img');
            expect(avatars[0].parentElement).toHaveStyle(
                'transform: translateX(-0px)'
            );
            expect(avatars[1].parentElement).toHaveStyle(
                'transform: translateX(-5px)'
            );
            expect(avatars[2].parentElement).toHaveStyle(
                'transform: translateX(-10px)'
            );
        });
    });
});
