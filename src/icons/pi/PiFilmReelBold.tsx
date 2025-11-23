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

export const PiFilmReelBold = (props: IconProps) => {
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
        <Path d="M232 212h-36.2a107.94 107.94 0 1 0-67.8 24h104a12 12 0 0 0 0-24M44 128a84 84 0 1 1 84 84 84.09 84.09 0 0 1-84-84m64-44a20 20 0 1 1 20 20 20 20 0 0 1-20-20m20 108a20 20 0 1 1 20-20 20 20 0 0 1-20 20m24-64a20 20 0 1 1 20 20 20 20 0 0 1-20-20m-48 0a20 20 0 1 1-20-20 20 20 0 0 1 20 20" />
      </G>
    </Svg>
  );
};