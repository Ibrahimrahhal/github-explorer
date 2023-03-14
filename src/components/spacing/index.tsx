type SpacingInput =
    | number
    | [number, number]
    | [number, number, number, number];
type SpacingProps = {
    padding?: SpacingInput;
    margin?: SpacingInput;
};

const getSpacing = (value: SpacingInput) => {
    const val = Array.isArray(value) ? value : [value];
    return val.map((v) => `${v * 8}px`).join(' ');
};

export const SpacingHOC = <
    InputProps extends React.HTMLAttributes<HTMLElement>
>(
    Component: React.ComponentType<InputProps>
) => {
    const newComponent = (props: InputProps & SpacingProps) => {
        const { padding, margin, style, ...rest } = props;
        const newStyles = {
            padding: padding ? getSpacing(padding) : undefined,
            margin: margin ? getSpacing(margin) : undefined,
            ...(style || {})
        };
        return <Component style={newStyles} {...(rest as InputProps)} />;
    };
    return newComponent;
};
