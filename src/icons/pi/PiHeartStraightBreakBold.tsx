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

export const PiHeartStraightBreakBold = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M225.84 54.16a62 62 0 0 0-87.6-.08L128 63.94l-10.24-9.86a62 62 0 0 0-87.66 87.7l89.35 90.64a12 12 0 0 0 17.1 0l89.29-90.58a62 62 0 0 0 0-87.68m-17 70.77-80.81 82-80.87-82a38 38 0 1 1 53.74-53.74l.16.16 9.67 9.31-7 6.76a12 12 0 0 0-.17 17.13L127 128l-7.52 7.51a12 12 0 1 0 17 17l16-16a12 12 0 0 0 0-17l-23.35-23.35L155 71.29l.16-.16a38 38 0 1 1 53.68 53.8" />
      </G>
    </Svg>
  );
};