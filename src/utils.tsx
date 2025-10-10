import {
    G,
    Path,
    Svg,
} from 'react-native-svg';

// Тип для узлов SVG
type IconTree = {
    tag: string;
    attr: Record<string, any>;
    child?: IconTree[];
};

type IconProps = {
    size?: number;
    color?: string;
    style?: object;
};

export function GenIcon(data: IconTree) {
    return (props: IconProps) => {
        const {
            size = 24,
            color = 'black',
            style,
            ...restProps
        } = props;

        // Рекурсивный рендеринг дерева
        const renderNode = (node: IconTree, i: number) => {
            const Tag = tagMap[node.tag];
            if (!Tag) return null;

            const attrs = {
                ...node.attr,
                key: i,
                fill: node.attr.fill === 'currentColor' ? color : node.attr.fill,
            };

            return (
                <Tag {...attrs} >
                    {node.child && node.child.map(renderNode)}
                </Tag>
            );
        };

        return (
            <Svg
                width={size}
                height={size}
                viewBox={data.attr.viewBox || '0 0 24 24'}
                style={style}
                {...restProps}
            >
                {data.child?.map(renderNode)}
            </Svg>
        );
    };
}

// Карта поддерживаемых SVG тегов
const tagMap: Record<string, any> = {
    svg: Svg,
    path: Path,
    g: G,
};