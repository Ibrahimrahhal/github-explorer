import { render, screen } from '@testing-library/react';
import { Avatar } from '@/components/avatar';
import styles from '@/components/avatar/index.module.scss';

describe('Components', () => {
    describe('Avatar', () => {
        it('should render an image with the specified src and alt', () => {
            render(<Avatar src="avatar.jpg" alt="Avatar" />);
            const image = screen.getByAltText('Avatar');
            expect(image).toHaveAttribute('src', 'avatar.jpg');
        });

        it('should render the correct size class when a size prop is provided', () => {
            render(<Avatar src="avatar.jpg" alt="Avatar" size="small" />);
            const avatar = screen.getByRole('img').closest('div');
            expect(avatar).toHaveClass(styles['avatar--small']);
        });

        it('should add any additional class names provided', () => {
            render(
                <Avatar
                    src="avatar.jpg"
                    alt="Avatar"
                    className="custom-class"
                />
            );
            const avatar = screen.getByRole('img').closest('div');
            expect(avatar).toHaveClass(styles.avatar, 'custom-class');
        });

        it('should pass through any additional props to the container div', () => {
            const onClick = jest.fn();
            render(
                <Avatar
                    src="avatar.jpg"
                    alt="Avatar"
                    onClick={onClick}
                    style={{
                        color: 'blue'
                    }}
                />
            );
            const avatar = screen.getByRole('img').closest('div');
            expect(avatar).toHaveAttribute('style');
            if (avatar) avatar.click();
            expect(onClick).toHaveBeenCalled();
        });
    });
});
