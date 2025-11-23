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

export const PiNotEquals = (props: IconProps) => {
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
        <Path d="M224 160a8 8 0 0 1-8 8H102.45l-48.53 53.38a8 8 0 0 1-11.84-10.76L80.82 168H40a8 8 0 0 1 0-16h55.37L139 104H40a8 8 0 0 1 0-16h113.55l48.53-53.38a8 8 0 0 1 11.84 10.76L175.18 88H216a8 8 0 0 1 0 16h-55.37L117 152h99a8 8 0 0 1 8 8" />
      </G>
    </Svg>
  );
};