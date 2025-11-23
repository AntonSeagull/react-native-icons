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

export const GiHastyGrave = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m416.62 213.555-282.14-28.67 6.78-66.7 282.14 28.67zM79.38 492.185h353.24s-72.39-55.05-177-55.05c-52.38 0-112.77 13.76-176.24 55.05m205.27-69.68 20.16-204.23-66.66-6.77-20.92 212a314 314 0 0 1 38.35-2.36c9.99-.01 19.69.48 29.07 1.36m39.1-396.11-66.68-6.58-9.2 93.17 66.66 6.77z" />
      </G>
    </Svg>
  );
};