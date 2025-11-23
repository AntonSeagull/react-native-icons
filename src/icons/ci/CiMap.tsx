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

export const CiMap = (props: IconProps) => {
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
        <Path d="M20.21 4.576a1.9 1.9 0 0 0-1.63-.35l-3.53.89a1.1 1.1 0 0 1-.44 0l-4.98-1.24a2.04 2.04 0 0 0-.92 0L4.5 4.936a1.89 1.89 0 0 0-1.44 1.84v11.15a1.87 1.87 0 0 0 .73 1.5 1.9 1.9 0 0 0 1.63.35l3.53-.89a1.1 1.1 0 0 1 .44 0l4.98 1.24a2.3 2.3 0 0 0 .46.05 2.4 2.4 0 0 0 .46-.05l4.21-1.06a1.89 1.89 0 0 0 1.44-1.84V6.076a1.87 1.87 0 0 0-.73-1.5M8.67 17.926l-3.49.87a.89.89 0 0 1-1.12-.87V6.776a.9.9 0 0 1 .68-.87l3.93-.99Zm5.66 1.16-4.66-1.16V4.916l4.66 1.16Zm5.61-1.86a.9.9 0 0 1-.68.87l-3.93.99V6.076l3.49-.87a.9.9 0 0 1 .78.16.89.89 0 0 1 .34.71Z" />
      </G>
    </Svg>
  );
};