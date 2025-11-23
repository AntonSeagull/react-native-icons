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

export const TbShieldOff = (props: IconProps) => {
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
        <Path d="M17.67 17.667A12 12 0 0 1 12 21 12 12 0 0 1 3.5 6c.794.036 1.583-.006 2.357-.124m3.128-.926A12 12 0 0 0 12 3a12 12 0 0 0 8.5 3 12 12 0 0 1-1.116 9.376M3 3l18 18" />
      </G>
    </Svg>
  );
};