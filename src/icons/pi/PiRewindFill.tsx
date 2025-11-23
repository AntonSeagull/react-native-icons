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

export const PiRewindFill = (props: IconProps) => {
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
        <Path d="M232 71.84v112.32a15.92 15.92 0 0 1-24.48 13.34L128 146.86v37.3a15.92 15.92 0 0 1-24.48 13.34l-88.19-56.16a15.8 15.8 0 0 1 0-26.68l88.19-56.16A15.91 15.91 0 0 1 128 71.84v37.3l79.52-50.64A15.91 15.91 0 0 1 232 71.84" />
      </G>
    </Svg>
  );
};