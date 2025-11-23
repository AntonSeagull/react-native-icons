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

export const SiWire = (props: IconProps) => {
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
        <Path d="M24 14.475a7.395 7.395 0 0 1-7.38 7.41h-.016a7.3 7.3 0 0 1-4.5-1.605A7.498 7.498 0 0 1 0 14.475V2.82h1.41v11.655a6 6 0 0 0 9.585 4.815 7.38 7.38 0 0 1-1.815-4.814v-9.54a2.82 2.82 0 0 1 5.64 0v9.54a7.37 7.37 0 0 1-1.77 4.814 5.997 5.997 0 0 0 8.383-1.304 6 6 0 0 0 1.157-3.511V2.82H24zm-10.59-9.54a1.41 1.41 0 0 0-2.82 0v9.54A6 6 0 0 0 12 18.33a6 6 0 0 0 1.41-3.855z" />
      </G>
    </Svg>
  );
};