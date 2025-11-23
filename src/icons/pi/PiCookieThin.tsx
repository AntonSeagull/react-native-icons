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

export const PiCookieThin = (props: IconProps) => {
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
        <Path d="M161.66 166.34a8 8 0 1 1-11.32 0 8 8 0 0 1 11.32 0m-75.32-8a8 8 0 1 0 11.32 0 8 8 0 0 0-11.32 0m3.32-56a8 8 0 1 0 0 11.32 8 8 0 0 0 0-11.32m36.68 16a8 8 0 1 0 11.32 0 8 8 0 0 0-11.32 0M228 128A100 100 0 1 1 128 28a4 4 0 0 1 4 4 44.05 44.05 0 0 0 44 44 4 4 0 0 1 4 4 44.05 44.05 0 0 0 44 44 4 4 0 0 1 4 4m-8.08 3.84a52.08 52.08 0 0 1-47.78-48 52.08 52.08 0 0 1-48-47.78 92 92 0 1 0 95.76 95.76Z" />
      </G>
    </Svg>
  );
};