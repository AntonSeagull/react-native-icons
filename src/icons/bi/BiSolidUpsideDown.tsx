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

export const BiSolidUpsideDown = (props: IconProps) => {
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
        <Path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2M8.507 15a1.494 1.494 0 1 1 .001-2.987A1.494 1.494 0 0 1 8.507 15m4.301-6.919a4.1 4.1 0 0 0-1.616 0 4 4 0 0 0-.751.233c-.234.1-.463.224-.678.368a4.1 4.1 0 0 0-1.08 1.082L7.024 8.646a6.03 6.03 0 0 1 2.639-2.175 6 6 0 0 1 1.128-.35 6.1 6.1 0 0 1 2.415 0 5.9 5.9 0 0 1 2.148.903 6.1 6.1 0 0 1 1.621 1.622l-1.658 1.117a4 4 0 0 0-.488-.59 4 4 0 0 0-2.021-1.092M15.5 15a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 15.5 15" />
      </G>
    </Svg>
  );
};