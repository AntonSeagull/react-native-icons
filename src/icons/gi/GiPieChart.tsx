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

export const GiPieChart = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m290.352 13.213-11.475 218.984 204.68-78.584a219.242 219.284 0 0 0-193.205-140.4m-51.39 47.566A219.242 219.284 0 0 0 38.59 206.24a219.242 219.284 0 0 0 77.3 250.918 219.242 219.284 0 0 0 262.49-3.092 219.242 219.284 0 0 0 71.366-252.67l-204.682 78.583 12.24-218.943a219.242 219.284 0 0 0-18.34-.258z" />
      </G>
    </Svg>
  );
};