import { SpacingHOC } from '@/components/spacing';
import {memo} from 'react';
import styles from './index.module.scss';

type TypographyProps = {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2';
    color?: 'initial' | 'inherit' | 'primary' | 'secondary';
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
    display?: 'initial' | 'block' | 'inline';
    className?: string;
    light?: boolean;
} & React.HTMLAttributes<HTMLParagraphElement>;

const _Typography = ({
    variant = 'body1',
    color = 'initial',
    align = 'inherit',
    display = 'initial',
    light = false,
    className,
    ...props
}: TypographyProps) => {
    let elementType: string = variant;
    if (elementType.includes('body')) elementType = 'p';
    const Elm = elementType as unknown as React.FC<
        React.HTMLAttributes<HTMLParagraphElement>
    >;
    const classNames = [
        className,
        styles.text,
        styles[`text--${variant}`],
        styles[`text--${color}`],
        styles[`text--${align}`],
        styles[`text--${display}`],
        light && styles['text--light']
    ]
        .filter(Boolean)
        .join(' ');
    return (
        <Elm {...props} className={classNames}>
            {props.children}
        </Elm>
    );
};

export const Typography = memo(SpacingHOC(_Typography));
