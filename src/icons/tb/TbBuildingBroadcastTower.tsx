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

export const TbBuildingBroadcastTower = (props: IconProps) => {
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
        <Path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
        <Path d="M16.616 13.924a5 5 0 1 0-9.23 0" />
        <Path d="M20.307 15.469a9 9 0 1 0-16.615 0" />
        <Path d="m9 21 3-9 3 9M10 19h4" />
      </G>
    </Svg>
  );
};