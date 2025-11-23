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

export const TbTemperatureSnow = (props: IconProps) => {
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
        <Path d="M4 13.5a4 4 0 1 0 4 0V5a2 2 0 1 0-4 0zM4 9h4M14.75 4l1 2H18" />
        <Path d="m17 4-3 5 2 3M20.25 10 19 12l1.25 2" />
        <Path d="M22 12h-6l-2 3M18 18h-2.25l-1 2" />
        <Path d="m17 20-3-5h-1M12 9l2.088.008" />
      </G>
    </Svg>
  );
};