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

export const SiFormspree = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M1.333 2a2 2 0 0 1 2-2h17.334a2 2 0 0 1 2 2v2.857a2 2 0 0 1-2 2H3.333a2 2 0 0 1-2-2zm0 8.571a2 2 0 0 1 2-2h17.334a2 2 0 0 1 2 2v2.858a2 2 0 0 1-2 2H3.333a2 2 0 0 1-2-2zm2 6.572a2 2 0 0 0-2 2V22a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2.857a2 2 0 0 0-2-2z" />
      </G>
    </Svg>
  );
};