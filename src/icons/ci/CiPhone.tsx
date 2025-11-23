import {
  G,
  Path,
  Svg,
  Line,
  Circle,
  Polyline,
  Polygon,
  Rect,
  Ellipse
} from 'react-native-svg';
import type { IconProps } from '../../types';

export const CiPhone = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M14.436 20.938A11.384 11.384 0 0 1 4.572 3.9a1.67 1.67 0 0 1 1.241-.822 1.72 1.72 0 0 1 1.454.492l3.139 3.14a1.715 1.715 0 0 1 0 2.427l-.295.3a1.937 1.937 0 0 0 0 2.736l1.72 1.721a1.983 1.983 0 0 0 2.736 0l.29-.29a1.72 1.72 0 0 1 2.428 0l3.139 3.139a1.72 1.72 0 0 1 .492 1.455 1.67 1.67 0 0 1-.822 1.239 11.3 11.3 0 0 1-5.658 1.501M6.042 4.063a1 1 0 0 0-.1.006.67.67 0 0 0-.5.331 10.375 10.375 0 0 0 14.152 14.167.67.67 0 0 0 .331-.5.73.73 0 0 0-.208-.618l-3.139-3.139a.717.717 0 0 0-1.014 0l-.29.29a3.006 3.006 0 0 1-4.15 0L9.4 12.876a2.94 2.94 0 0 1 0-4.149l.3-.3a.717.717 0 0 0 0-1.014L6.56 4.277a.73.73 0 0 0-.518-.214" />
      </G>
    </Svg>
  );
};