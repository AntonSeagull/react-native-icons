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

export const PiListChecksFill = (props: IconProps) => {
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
        <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-90.34 117.66-32 32a8 8 0 0 1-11.32 0l-16-16a8 8 0 0 1 11.32-11.32L80 164.69l26.34-26.35a8 8 0 0 1 11.32 11.32m0-64-32 32a8 8 0 0 1-11.32 0l-16-16a8 8 0 0 1 11.32-11.32L80 100.69l26.34-26.35a8 8 0 0 1 11.32 11.32M192 168h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16m0-64h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16" />
      </G>
    </Svg>
  );
};