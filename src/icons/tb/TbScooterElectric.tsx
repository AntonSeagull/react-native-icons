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

export const TbScooterElectric = (props: IconProps) => {
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
        <Path d="M16 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
        <Path d="M8 17h5a6 6 0 0 1 5-5V7a2 2 0 0 0-2-2h-1M10 4 8 8h3l-2 4" />
      </G>
    </Svg>
  );
};