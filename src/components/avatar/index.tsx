import styles from './index.module.scss';

type AvatarProps = {
    src: string;
    alt: string;
    size?: 'extra-small' | 'small' | 'medium' | 'large';
    className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const Avatar = ({
    src,
    alt,
    size = 'medium',
    className,
    ...rest
}: AvatarProps) => {
    const classNames = [className, styles.avatar, styles[`avatar--${size}`]]
        .filter(Boolean)
        .join(' ');
    return (
        <div {...rest} className={classNames}>
            <img alt={alt} src={src} />
        </div>
    );
};
