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

export const ImrtBroken = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M11.8 1C14.118 1 16 2.882 16 5.2c0 4.566-4.935 5.982-8 10.616-3.243-4.663-8-5.9-8-10.616C0 2.881 1.882 1 4.2 1c.943 0 1.812.43 2.512 1.06L5.499 4l3.5 2-2 5 5.5-6-3.5-2 .967-1.451c.553-.34 1.175-.549 1.833-.549z" />
      </G>
    </Svg>
  );
};