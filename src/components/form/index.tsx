import styles from './index.module.scss';

type FormProps = {
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLFormElement>;

export const Form = ({
    children,
    onSubmit,
    className,
    ...props
}: FormProps) => {
    return (
        <form {...props} onSubmit={onSubmit} className={className}>
            {children}
        </form>
    );
};
