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

export const PiPicnicTableBold = (props: IconProps) => {
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
        <Path d="M244 124h-40.58l-24-48H192a12 12 0 0 0 0-24H64a12 12 0 0 0 0 24h12.58l-24 48H12a12 12 0 0 0 0 24h28.58l-19.31 38.63a12 12 0 1 0 21.46 10.73L67.42 148h121.16l24.69 49.36a12 12 0 1 0 21.46-10.73L215.42 148H244a12 12 0 0 0 0-24m-164.58 0 24-48h49.16l24 48Z" />
      </G>
    </Svg>
  );
};