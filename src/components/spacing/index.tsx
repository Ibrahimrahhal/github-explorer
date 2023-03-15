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
        const newStyles = style || {};
        if (padding) newStyles.padding = getSpacing(padding);
        if (margin) newStyles.margin = getSpacing(margin);
        return <Component style={newStyles} {...(rest as InputProps)} />;
    };
    return newComponent;
};
