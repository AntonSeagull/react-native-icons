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

export const CiRead = (props: IconProps) => {
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
        <Path d="M12 18.883a10.8 10.8 0 0 1-9.675-5.728 2.6 2.6 0 0 1 0-2.31A10.8 10.8 0 0 1 12 5.117a10.8 10.8 0 0 1 9.675 5.728 2.6 2.6 0 0 1 0 2.31A10.8 10.8 0 0 1 12 18.883m0-12.766a9.79 9.79 0 0 0-8.78 5.176 1.59 1.59 0 0 0 0 1.415A9.79 9.79 0 0 0 12 17.883a9.79 9.79 0 0 0 8.78-5.176 1.58 1.58 0 0 0 0-1.414A9.79 9.79 0 0 0 12 6.117" />
        <Path d="M12 16.049A4.049 4.049 0 1 1 16.049 12 4.054 4.054 0 0 1 12 16.049m0-7.1A3.049 3.049 0 1 0 15.049 12 3.05 3.05 0 0 0 12 8.951Z" />
        <Circle cx={12} cy={12} r={2.028} />
      </G>
    </Svg>
  );
};