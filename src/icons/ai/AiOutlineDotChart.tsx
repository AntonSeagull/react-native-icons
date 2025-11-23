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

export const AiOutlineDotChart = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 1024 1024"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 512, 512)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8M288 604a64 64 0 1 0 128 0 64 64 0 1 0-128 0m118-224a48 48 0 1 0 96 0 48 48 0 1 0-96 0m158 228a96 96 0 1 0 192 0 96 96 0 1 0-192 0m148-314a56 56 0 1 0 112 0 56 56 0 1 0-112 0" />
      </G>
    </Svg>
  );
};