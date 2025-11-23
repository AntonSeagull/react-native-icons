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

export const PiDotsSixVerticalThin = (props: IconProps) => {
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
        <Path d="M100 60a8 8 0 1 1-8-8 8 8 0 0 1 8 8m64 8a8 8 0 1 0-8-8 8 8 0 0 0 8 8m-72 52a8 8 0 1 0 8 8 8 8 0 0 0-8-8m72 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8m-72 68a8 8 0 1 0 8 8 8 8 0 0 0-8-8m72 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8" />
      </G>
    </Svg>
  );
};