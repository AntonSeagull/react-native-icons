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

export const PiFolderSimpleLockLight = (props: IconProps) => {
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
        <Path d="M230 88v16a6 6 0 0 1-12 0V88a2 2 0 0 0-2-2h-85.33a14 14 0 0 1-8.4-2.8L94.53 62.4a2 2 0 0 0-1.2-.4H40a2 2 0 0 0-2 2v136a2 2 0 0 0 2 2h72a6 6 0 0 1 0 12H40a14 14 0 0 1-14-14V64a14 14 0 0 1 14-14h53.33a14 14 0 0 1 8.4 2.8l27.74 20.8a2 2 0 0 0 1.2.4H216a14 14 0 0 1 14 14m0 80v40a6 6 0 0 1-6 6h-72a6 6 0 0 1-6-6v-40a6 6 0 0 1 6-6h10v-6a26 26 0 0 1 52 0v6h10a6 6 0 0 1 6 6m-56-6h28v-6a14 14 0 0 0-28 0Zm44 12h-60v28h60Z" />
      </G>
    </Svg>
  );
};