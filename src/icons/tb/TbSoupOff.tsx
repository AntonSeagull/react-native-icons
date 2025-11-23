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

export const TbSoupOff = (props: IconProps) => {
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
        <Path d="M3 19h16M15 11h6c0 1.691-.525 3.26-1.42 4.552m-2.034 2.032A7.96 7.96 0 0 1 13 19h-2a8 8 0 0 1-8-8h8M12 5v3M15 5v3M3 3l18 18" />
      </G>
    </Svg>
  );
};