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

export const PiPlugThin = (props: IconProps) => {
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
        <Path d="M234.83 69.17a4 4 0 0 0-5.66 0L192 106.34 149.66 64l37.17-37.17a4 4 0 1 0-5.66-5.66L144 58.34l-29.17-29.17a4 4 0 0 0-5.66 5.66l9.17 9.17-55.8 55.8a36.05 36.05 0 0 0 0 50.91l18.55 18.54-51.92 51.92a4 4 0 0 0 5.66 5.66l51.92-51.92 18.54 18.55a36.06 36.06 0 0 0 50.91 0l55.8-55.8 9.17 9.17a4 4 0 0 0 5.66-5.66L197.66 112l37.17-37.17a4 4 0 0 0 0-5.66M150.54 187.8a28 28 0 0 1-39.59 0L68.2 145.05a28 28 0 0 1 0-39.59l55.8-55.8L206.34 132Z" />
      </G>
    </Svg>
  );
};