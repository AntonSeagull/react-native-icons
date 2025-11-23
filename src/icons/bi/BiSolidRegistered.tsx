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

export const BiSolidRegistered = (props: IconProps) => {
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
        <Path d="M13 9h-3v2h3a1 1 0 0 0 0-2" />
        <Path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m2.13 15-2.67-4H10v4H8V7h5a3 3 0 0 1 .79 5.88L16.54 17z" />
      </G>
    </Svg>
  );
};