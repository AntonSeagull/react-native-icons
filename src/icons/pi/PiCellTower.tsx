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

export const PiCellTower = (props: IconProps) => {
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
        <Path d="M135.16 84.42a8 8 0 0 0-14.32 0l-72 144a8 8 0 0 0 14.31 7.16L77 208h102.1l13.79 27.58A8 8 0 0 0 200 240a8 8 0 0 0 7.15-11.58ZM128 105.89 155.06 160h-54.12ZM85 192l8-16h70.1l8 16Zm74.54-98.26a32 32 0 1 0-63 0 8 8 0 1 1-15.74 2.85 48 48 0 1 1 94.46 0 8 8 0 0 1-7.86 6.58 9 9 0 0 1-1.43-.13 8 8 0 0 1-6.48-9.3Zm-95.39 42.47a80 80 0 1 1 127.7 0 8 8 0 0 1-12.76-9.65 64 64 0 1 0-102.18 0 8 8 0 0 1-12.76 9.65" />
      </G>
    </Svg>
  );
};