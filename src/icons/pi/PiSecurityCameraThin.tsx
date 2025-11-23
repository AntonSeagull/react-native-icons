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

export const PiSecurityCameraThin = (props: IconProps) => {
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
        <Path d="M248 140a4 4 0 0 0-4 4v20h-48.69a4 4 0 0 1-2.82-1.17l-21.18-21.17 53.18-53.17a12 12 0 0 0 0-17l-56-56a12 12 0 0 0-17 0L5.76 161.76A6 6 0 0 0 10 172h41l36.48 36.49a12 12 0 0 0 17 0l61.18-61.18 21.17 21.17a11.9 11.9 0 0 0 8.48 3.52H244v20a4 4 0 0 0 8 0v-48a4 4 0 0 0-4-4M157.17 21.17a4.1 4.1 0 0 1 5.66 0l15.51 15.52L51 164H14.82ZM98.83 202.83a4.1 4.1 0 0 1-5.66 0L58.34 168 184 42.34l34.83 34.83a4 4 0 0 1 0 5.66Z" />
      </G>
    </Svg>
  );
};