import { memo } from 'react';
import { SpacingHOC } from '../spacing';
import styles from './index.module.scss';

type GridProps = {
    container?: boolean;
    item?: boolean;
    gap?: number;
    spans?: number;
} & React.HTMLAttributes<HTMLDivElement>;

const _Grid = ({
    container,
    item,
    children,
    className,
    style,
    gap,
    spans = 25,
    ...rest
}: GridProps) => {
    const classNames = [
        className,
        styles.grid,
        container && styles['grid--container'],
        item && styles['grid--item']
    ]
        .filter(Boolean)
        .join(' ');
    const newStyles = {
        ...(style || {}),
        ...{
            gap:
                typeof gap === 'undefined' || item ? undefined : `${gap * 8}px`,
            width:
                typeof spans === 'undefined' || container
                    ? undefined
                    : `${spans - 2}%`
        }
    };
    return (
        <div {...rest} className={classNames} style={newStyles}>
            {children}
        </div>
    );
};

export const Grid = memo(SpacingHOC<GridProps>(_Grid));
