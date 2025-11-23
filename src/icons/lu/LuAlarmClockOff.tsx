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

export const LuAlarmClockOff = (props: IconProps) => {
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
        <Path d="M6.87 6.87a8 8 0 1 0 11.26 11.26M19.9 14.25a8 8 0 0 0-9.15-9.15M22 6l-3-3M6.26 18.67 4 21M2 2l20 20M4 4 2 6" />
      </G>
    </Svg>
  );
};