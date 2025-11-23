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

export const ImnYen = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M7.5 1a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15m0 13.5a6 6 0 1 1 0-12 6 6 0 0 1 0 12" />
        <Path d="M9.5 9a.5.5 0 0 0 0-1H8.434l1.482-2.223a.5.5 0 1 0-.832-.554L7.5 7.599 5.916 5.223a.5.5 0 1 0-.832.554L6.566 8H5.5a.5.5 0 0 0 0 1H7v1H5.5a.5.5 0 0 0 0 1H7v1.5a.5.5 0 0 0 1 0V11h1.5a.5.5 0 0 0 0-1H8V9z" />
      </G>
    </Svg>
  );
};