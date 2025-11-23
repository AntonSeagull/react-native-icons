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

export const LiaMix = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M5 5v20c0 1.654 1.346 3 3 3s3-1.346 3-3V13a1 1 0 0 1 2 0v8c0 1.654 1.346 3 3 3s3-1.346 3-3v-6a1 1 0 0 1 2 0v2c0 1.654 1.346 3 3 3s3-1.346 3-3V5zm2 2h18v10a1 1 0 0 1-2 0v-2c0-1.654-1.346-3-3-3s-3 1.346-3 3v6a1 1 0 0 1-2 0v-8c0-1.654-1.346-3-3-3s-3 1.346-3 3v12a1 1 0 0 1-2 0z" />
      </G>
    </Svg>
  );
};