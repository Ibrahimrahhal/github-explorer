import { memo } from 'react';
import { Flex } from '@/components/flex';
import { Avatar } from '@/components/avatar';
import styles from './index.module.scss';

type AvatarListProps = {
    avatars: {
        src: string;
        alt: string;
    }[];
    size?: 'extra-small' | 'small' | 'medium' | 'large';
} & React.HTMLAttributes<HTMLDivElement>;

const _AvatarList = ({
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
                        key={avatar.src}
                        style={{
                            transform: `translateX(-${index * 5}px)`
                        }}
                    />
                );
            })}
        </Flex>
    );
};

export const AvatarList = memo(_AvatarList);