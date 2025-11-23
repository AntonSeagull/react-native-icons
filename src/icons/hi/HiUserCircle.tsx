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

export const HiUserCircle = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 10, 10)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-6-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2 4a5 5 0 0 0-4.546 2.916A5.99 5.99 0 0 0 10 16a5.99 5.99 0 0 0 4.546-2.084A5 5 0 0 0 10 11" clipRule="evenodd" />
      </G>
    </Svg>
  );
};