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

export const GiAirZigzag = (props: IconProps) => {
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
        <Path d="M185.901 21.667c87.765 81.467 140 169.208 177.287 267.486-87.698-104.24-120.874-125.43-246.298-179.823 91.563 72.21 109.218 91.017 162.839 176.715-70.043-52.221-166.377-103.052-258.966-130.635v85.401c95.446 24.54 244.61 97.1 311.842 175.215-.625-25.575-3.985-51.147-14.516-76.722L426.95 451.276c-6.545-34.005-20.51-67.185-41.99-99.53l114.046 116.636C461.763 292.837 343.066 104.34 185.903 21.667Z" />
      </G>
    </Svg>
  );
};