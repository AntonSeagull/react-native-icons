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

export const PiSupersetProperOfLight = (props: IconProps) => {
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
        <Path d="M222 128a86.1 86.1 0 0 1-86 86H64a6 6 0 0 1 0-12h72a74 74 0 0 0 0-148H64a6 6 0 0 1 0-12h72a86.1 86.1 0 0 1 86 86" />
      </G>
    </Svg>
  );
};