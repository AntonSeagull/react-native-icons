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

export const BsSpeakerFill = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M9 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-2.5 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0" />
        <Path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0M8 7a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7" />
      </G>
    </Svg>
  );
};