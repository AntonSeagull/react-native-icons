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

export const BiSolidAward = (props: IconProps) => {
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
        <Path d="M5 8.999a6.99 6.99 0 0 0 2.879 5.646l.001.001a7 7 0 0 0 1.881.979l.051.019a7 7 0 0 0 1.163.271 7 7 0 0 0 1.024.085H12c.35 0 .69-.034 1.027-.084l.182-.028q.505-.088.981-.243l.042-.016C17 14.693 19 12.078 19 8.999 19 5.14 15.86 2 12 2S5 5.14 5 8.999M12 4c2.756 0 5 2.242 5 4.999h-2A3.003 3.003 0 0 0 12 6zM7.521 16.795V22L12 20.5l4.479 1.5.001-5.205a8.93 8.93 0 0 1-8.959 0" />
      </G>
    </Svg>
  );
};