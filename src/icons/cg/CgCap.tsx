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

export const CgCap = (props: IconProps) => {
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
        <Path fill="currentColor" d="M8 18v2h8v-2z" />
        <Path fill="currentColor" fillRule="evenodd" d="M13.988 3.22Q14 3.112 14 3a2 2 0 1 0-3.988.22 9.003 9.003 0 0 0-6.94 9.926A3 3 0 0 0 1 16v4a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-4c0-1.333-.87-2.463-2.072-2.854q.071-.563.072-1.146a9 9 0 0 0-7.012-8.78M12 5a7 7 0 0 0-6.93 8h13.86q.07-.49.07-1a7 7 0 0 0-7-7M3 16a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};