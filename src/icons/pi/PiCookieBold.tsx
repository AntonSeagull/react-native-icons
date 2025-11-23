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

export const PiCookieBold = (props: IconProps) => {
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
        <Path d="M167.31 160.69a16 16 0 1 1-22.62 0 16 16 0 0 1 22.62 0m-86.62-8a16 16 0 1 0 22.62 0 16 16 0 0 0-22.62 0m14.62-33.38a16 16 0 1 0-22.62 0 16 16 0 0 0 22.62 0m48-6.62a16 16 0 1 0 0 22.62 16 16 0 0 0 0-22.62M236 128A108 108 0 1 1 128 20a12 12 0 0 1 12 12 36 36 0 0 0 36 36 12 12 0 0 1 12 12 36 36 0 0 0 36 36 12 12 0 0 1 12 12m-24.67 10.65A60.17 60.17 0 0 1 165 91a60.17 60.17 0 0 1-47.66-46.32 84 84 0 1 0 94 94Z" />
      </G>
    </Svg>
  );
};