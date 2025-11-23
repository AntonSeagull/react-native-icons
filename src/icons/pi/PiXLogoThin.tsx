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

export const PiXLogoThin = (props: IconProps) => {
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
        <Path d="M211.37 213.85 147.13 112.9 211 42.69a4 4 0 0 0-6-5.38l-62.32 68.59-43.3-68.05A4 4 0 0 0 96 36H48a4 4 0 0 0-3.37 6.15l64.24 100.95L45 213.31a4 4 0 1 0 6 5.38l62.36-68.59 43.3 68.05A4 4 0 0 0 160 220h48a4 4 0 0 0 3.37-6.15M162.2 212 55.29 44H93.8l106.91 168Z" />
      </G>
    </Svg>
  );
};