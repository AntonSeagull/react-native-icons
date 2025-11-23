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

export const PiSquareSplitVerticalFill = (props: IconProps) => {
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
        <Path d="M216 56v60a4 4 0 0 1-4 4H44a4 4 0 0 1-4-4V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16m-4 80H44a4 4 0 0 0-4 4v60a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-60a4 4 0 0 0-4-4" />
      </G>
    </Svg>
  );
};