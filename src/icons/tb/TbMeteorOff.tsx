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

export const TbMeteorOff = (props: IconProps) => {
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
        <Path d="M9.75 5.761 13 3l-1 5 9-5-5 9h5l-2.467 2.536m-1.983 2.04-2.441 2.51A6.5 6.5 0 1 1 5.254 9.58l2.322-1.972" />
        <Path d="M7 14.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0M3 3l18 18" />
      </G>
    </Svg>
  );
};