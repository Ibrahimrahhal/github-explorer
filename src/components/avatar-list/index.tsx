import { Flex } from '@/components/flex';
import styles from './index.module.scss';
import { Avatar } from '@/components/avatar';

type AvatarListProps = {
    avatars: {
        src: string;
        alt: string;
    }[];
    size?: 'extra-small' | 'small' | 'medium' | 'large';
} & React.HTMLAttributes<HTMLDivElement>;

export const AvatarList = ({
    children,
    className,
    avatars,
    size = 'medium',
    ...rest
}: AvatarListProps) => {
    return (
        <Flex {...rest}>
            {avatars.map((avatar, index) => {
                return (
                    <Avatar
                        {...avatar}
                        size={size}
                        id={avatar.src}
                        style={{
                            transform: `translateX(-${index * 5}px)`
                        }}
                    />
                );
            })}
        </Flex>
    );
};
