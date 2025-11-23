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

export const SiRobloxstudio = (props: IconProps) => {
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
        <Path d="m13.936 15.356-12.11-3.244L0 18.93 18.928 24l2.68-9.99-6.818-1.83zM5.072 0 2.394 9.992l6.816 1.83.854-3.178 12.11 3.246L24 5.072z" />
      </G>
    </Svg>
  );
};