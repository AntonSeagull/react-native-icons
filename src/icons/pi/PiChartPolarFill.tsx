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

export const PiChartPolarFill = (props: IconProps) => {
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
        <Path d="M120 199.54v27.74a4 4 0 0 1-4.46 4 104.22 104.22 0 0 1-90.8-90.8 4 4 0 0 1 4-4.46h27.72A72.11 72.11 0 0 0 120 199.54M183.42 136H136v47.42A56.11 56.11 0 0 0 183.42 136M136 72.58V120h47.42A56.11 56.11 0 0 0 136 72.58M227.28 136h-27.74A72.11 72.11 0 0 1 136 199.54v27.74a4 4 0 0 0 4.46 4 104.22 104.22 0 0 0 90.8-90.8 4 4 0 0 0-3.98-4.48m-27.74-16h27.74a4 4 0 0 0 4-4.46 104.22 104.22 0 0 0-90.8-90.8 4 4 0 0 0-4.46 4v27.72A72.11 72.11 0 0 1 199.54 120m-84-95.26a104.22 104.22 0 0 0-90.8 90.8 4 4 0 0 0 4 4.46h27.72A72.11 72.11 0 0 1 120 56.46V28.72a4 4 0 0 0-4.46-3.98M72.58 120H120V72.58A56.11 56.11 0 0 0 72.58 120M120 183.42V136H72.58A56.11 56.11 0 0 0 120 183.42" />
      </G>
    </Svg>
  );
};