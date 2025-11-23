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

export const GrItalic = (props: IconProps) => {
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
        <Path d="m13 19.56-.13.43H6.3l.16-.43a4 4 0 0 0 1.3-.17 1.6 1.6 0 0 0 .76-.55 7.2 7.2 0 0 0 .8-2l2.77-9.61a7 7 0 0 0 .35-1.81.86.86 0 0 0-.15-.52.94.94 0 0 0-.46-.32 4.3 4.3 0 0 0-1.22-.11l.14-.43h6.16l-.13.43a2.6 2.6 0 0 0-1.12.17 1.8 1.8 0 0 0-.81.67 9 9 0 0 0-.71 1.93l-2.74 9.63a8.8 8.8 0 0 0-.4 1.69.83.83 0 0 0 .15.5.92.92 0 0 0 .47.32 6.4 6.4 0 0 0 1.38.18" />
      </G>
    </Svg>
  );
};