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

export const PiScribbleFill = (props: IconProps) => {
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
        <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-14.34 137.66-8 8a9 9 0 0 0 0 12.68l4 4a8 8 0 0 1-11.32 11.32l-4-4a25 25 0 0 1 0-35.32l8-8a9 9 0 0 0 0-12.68 9 9 0 0 0-12.68 0l-48 48a25 25 0 0 1-35.32-35.32l72-72a9 9 0 0 0 0-12.68 9 9 0 0 0-12.68 0l-48 48a25 25 0 0 1-35.32-35.32l28-28a8 8 0 0 1 11.32 11.32l-28 28a9 9 0 0 0 0 12.68 9 9 0 0 0 12.68 0l48-48a25 25 0 0 1 35.32 35.32l-72 72a9 9 0 0 0 0 12.68 9 9 0 0 0 12.68 0l48-48a25 25 0 0 1 35.32 35.32" />
      </G>
    </Svg>
  );
};