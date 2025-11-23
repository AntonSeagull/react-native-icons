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

export const BiSolidJoystickAlt = (props: IconProps) => {
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
        <Path d="M16 6H8a6 6 0 0 0 0 12h8a6 6 0 0 0 0-12m-5 7H9v2H7v-2H5v-2h2V9h2v2h2zm3.5 2a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m3-3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
      </G>
    </Svg>
  );
};