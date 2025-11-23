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

export const PiStrategyThin = (props: IconProps) => {
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
        <Path d="M76 156a32 32 0 1 0 32 32 32 32 0 0 0-32-32m0 56a24 24 0 1 1 24-24 24 24 0 0 1-24 24M45.17 109.17 62.34 92 45.17 74.83a4 4 0 0 1 5.66-5.66L68 86.34l17.17-17.17a4 4 0 0 1 5.66 5.66L73.66 92l17.17 17.17a4 4 0 0 1-5.66 5.66L68 97.66l-17.17 17.17a4 4 0 0 1-5.66-5.66m181.66 96a4 4 0 0 1-5.66 5.66L204 193.66l-17.17 17.17a4 4 0 0 1-5.66-5.66L198.34 188l-17.17-17.17a4 4 0 0 1 5.66-5.66L204 182.34l17.17-17.17a4 4 0 0 1 5.66 5.66L209.66 188Zm-46.21-93.41c-5.82 21-23.77 39.15-43.65 44.12a4 4 0 0 1-1 .12 4 4 0 0 1-1-7.88c16.94-4.24 32.87-20.42 37.88-38.49 3.47-12.53 3.55-31.51-15.74-50.8L148 49.66V80a4 4 0 0 1-8 0V40a4 4 0 0 1 4-4h40a4 4 0 0 1 0 8h-30.34l9.17 9.17c17.17 17.18 23.5 37.99 17.79 58.59" />
      </G>
    </Svg>
  );
};