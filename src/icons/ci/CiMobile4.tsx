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

export const CiMobile4 = (props: IconProps) => {
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
        <Circle cx={12.003} cy={18.937} r={1} />
        <Path d="M16.725 2.065h-9.45a2.386 2.386 0 0 0-2.24 2.5v14.87a2.386 2.386 0 0 0 2.24 2.5h9.45a2.38 2.38 0 0 0 2.24-2.5V4.565a2.38 2.38 0 0 0-2.24-2.5m1.24 17.37a1.384 1.384 0 0 1-1.24 1.5h-9.45a1.39 1.39 0 0 1-1.24-1.5v-2.5h11.93Zm0-3.5H6.035V4.565a1.39 1.39 0 0 1 1.24-1.5h9.45a1.384 1.384 0 0 1 1.24 1.5Z" />
      </G>
    </Svg>
  );
};