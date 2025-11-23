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

export const TiCameraOutline = (props: IconProps) => {
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
        <Path d="M19 20H5c-1.654 0-3-1.346-3-3V9c0-1.654 1.346-3 3-3h1.586l1-1C8.165 4.421 9.182 4 10 4h4c.818 0 1.835.421 2.414 1l1 1H19c1.654 0 3 1.346 3 3v8c0 1.654-1.346 3-3 3M5 8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-2a1 1 0 0 1-.707-.293L15 6.414C14.799 6.213 14.285 6 14 6h-4c-.285 0-.799.213-1 .414L7.707 7.707A1 1 0 0 1 7 8zm7 2c1.379 0 2.5 1.121 2.5 2.5S13.379 15 12 15s-2.5-1.121-2.5-2.5S10.621 10 12 10m0-1a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m6-.301a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6" />
      </G>
    </Svg>
  );
};