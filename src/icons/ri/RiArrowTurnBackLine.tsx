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

export const RiArrowTurnBackLine = (props: IconProps) => {
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
        <Path d="m17 18.172-2.535-2.536-1.414 1.414L18 22l4.95-4.95-1.415-1.414L19 18.172V11a8 8 0 1 0-16 0v9h2v-9a6 6 0 1 1 12 0z" />
      </G>
    </Svg>
  );
};