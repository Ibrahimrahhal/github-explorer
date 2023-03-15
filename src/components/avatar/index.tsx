import styles from './index.module.scss';

type AvatarProps = {
    src: string;
    alt: string;
    size?: 'small' | 'medium' | 'large';
    className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const Avatar = ({
    src,
    alt,
    size = 'medium',
    className
}: AvatarProps) => {
    const classNames = [className, styles.avatar, styles[`avatar--${size}`]]
        .filter(Boolean)
        .join(' ');
    return (
        <div className={classNames}>
            <img alt={alt} src={src} />
        </div>
    );
};
