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

export const RiEditCircleLine = (props: IconProps) => {
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
        <Path d="M12.684 4.025a8 8 0 1 0 7.287 7.287 8 8 0 0 0-.603-2.439l1.5-1.502A9.94 9.94 0 0 1 22 11.997c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10q.378 0 .749.027a10 10 0 0 1 3.877 1.104L15.125 4.63a8 8 0 0 0-2.44-.604m7.801-1.928L21.9 3.511l-9.193 9.193-1.412.002-.002-1.416z" />
      </G>
    </Svg>
  );
};