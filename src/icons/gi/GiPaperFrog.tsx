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

export const GiPaperFrog = (props: IconProps) => {
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
        <Path d="M248.2 77.85 243.1 99l30.9-3.3zm38 32.55-35 1.5 40 22.6zm-49.9 16.8-17.5 15.1 165.8 98.4-15.1 51.5L421 234zM179.5 148 73.1 230l6.99 152L260 355.4l94.8-109.3zm206.3 41.2 39.8 25.8-2.1-24.1zm56.6 7 3.8 36.6-12 13.5 65.5-17.6zM58.83 222.7l-37.66 68.5 32.87-9.4zM314.7 324.6l-31.1 32.1 37-7.4zm-1.4 46.1L245 388l2.3 44.5z" />
      </G>
    </Svg>
  );
};