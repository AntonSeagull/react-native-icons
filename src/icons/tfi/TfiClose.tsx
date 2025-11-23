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

export const TfiClose = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m9.207 8.5 6.646 6.646-.707.707L8.5 9.207l-6.646 6.646-.707-.707L7.793 8.5 1.146 1.854l.707-.707L8.5 7.793l6.646-6.646.707.707z" />
      </G>
    </Svg>
  );
};