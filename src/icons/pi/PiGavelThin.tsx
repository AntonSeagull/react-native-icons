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

export const PiGavelThin = (props: IconProps) => {
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
        <Path d="m240.49 119.52-16-16a12 12 0 0 0-17 0l-1.17 1.17-55-55 1.18-1.17a12 12 0 0 0 0-17l-16-16a12 12 0 0 0-17 0l-64 64a12 12 0 0 0 0 17l16 16a12 12 0 0 0 17 0l1.17-1.18L102.34 124l-68.2 68.21a21 21 0 0 0 29.66 29.66l68.2-68.21 12.69 12.69-1.18 1.17a12 12 0 0 0 0 17l16 16a12 12 0 0 0 17 0l64-64a12 12 0 0 0 0-17ZM77.17 106.83l-16-16a4 4 0 0 1 0-5.66l64-64a4 4 0 0 1 5.66 0l16 16a4 4 0 0 1 0 5.65l-64 64a4 4 0 0 1-5.66.01m-19 109.38a13 13 0 1 1-18.37-18.34l68.2-68.21L126.34 148Zm37.14-110.55 50.35-50.35 55 55-50.35 50.35Zm139.52 25.17-64 64a4 4 0 0 1-5.66 0l-16-16a4 4 0 0 1 0-5.65l64-64a4 4 0 0 1 5.66 0l16 16a4 4 0 0 1 0 5.66Z" />
      </G>
    </Svg>
  );
};