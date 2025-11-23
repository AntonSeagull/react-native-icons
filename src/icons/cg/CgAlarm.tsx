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

export const CgAlarm = (props: IconProps) => {
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
        <Path fill="currentColor" d="M5.459 2 1 6.015 2.338 7.5l4.46-4.015zM11 8h2v4h3v2h-5z" />
        <Path fill="currentColor" fillRule="evenodd" d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0m2 0a7 7 0 1 1 14 0 7 7 0 0 1-14 0" clipRule="evenodd" />
        <Path fill="currentColor" d="M18.541 2 23 6.015 21.662 7.5l-4.46-4.015z" />
      </G>
    </Svg>
  );
};