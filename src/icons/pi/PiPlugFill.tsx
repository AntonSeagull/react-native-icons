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

export const PiPlugFill = (props: IconProps) => {
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
        <Path d="M237.66 77.66 203.31 112l26.35 26.34a8 8 0 0 1-11.32 11.32l-6.34-6.35-53 53a40 40 0 0 1-56.57 0l-15.68-15.74-49.09 49.09a8 8 0 0 1-11.32-11.32l49.09-49.09-15.71-15.71a40 40 0 0 1 0-56.57l53-53-6.35-6.34a8 8 0 0 1 11.32-11.32L144 52.69l34.34-34.35a8 8 0 1 1 11.32 11.32L155.31 64 192 100.69l34.34-34.35a8 8 0 0 1 11.32 11.32" />
      </G>
    </Svg>
  );
};