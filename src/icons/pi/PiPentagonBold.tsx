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

export const PiPentagonBold = (props: IconProps) => {
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
        <Path d="m228 84.38-87.9-68.29-.26-.2a19.92 19.92 0 0 0-23.66 0l-.26.2L28 84.38a20 20 0 0 0-7.09 22l32 107.51.08.26A19.93 19.93 0 0 0 72 228h112a19.93 19.93 0 0 0 19-13.87l.08-.26 32-107.51A20 20 0 0 0 228 84.38M181 204H75L44.62 101.87 128 37.09l83.38 64.78Z" />
      </G>
    </Svg>
  );
};