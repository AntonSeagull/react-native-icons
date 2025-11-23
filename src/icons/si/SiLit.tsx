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

export const SiLit = (props: IconProps) => {
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
        <Path d="m2.4 9.6 4.8 4.8V24l-4.8-4.8zm4.8-4.8v9.6L12 9.6V0zM12 9.6v9.6l4.8-4.8V4.8zm4.8 4.8V24l4.8-4.8V9.6z" />
      </G>
    </Svg>
  );
};