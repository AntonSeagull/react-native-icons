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

export const SiAlacritty = (props: IconProps) => {
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
        <Path d="m10.065 0-8.57 21.269H5.09L12 5.025l6.91 16.244h3.594L13.934 0zM12 9.935 9.702 15.5c1.475 4.54 1.475 4.54 2.298 8.5.823-3.96.823-3.96 2.297-8.5z" />
      </G>
    </Svg>
  );
};