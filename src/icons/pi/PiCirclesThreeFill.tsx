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

export const PiCirclesThreeFill = (props: IconProps) => {
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
        <Path d="M128 120a44 44 0 1 1 44-44 44.05 44.05 0 0 1-44 44m60 8a44 44 0 1 0 44 44 44.05 44.05 0 0 0-44-44m-120 0a44 44 0 1 0 44 44 44.05 44.05 0 0 0-44-44" />
      </G>
    </Svg>
  );
};