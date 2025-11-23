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

export const RiH6 = (props: IconProps) => {
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
        <Path d="m21.097 8-2.598 4.5a4 4 0 1 1-3.453 1.981L18.788 8zM4 4v7h7V4h2v16h-2v-7H4v7H2V4zm14.5 10.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
      </G>
    </Svg>
  );
};