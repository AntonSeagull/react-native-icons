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

export const FcServiceMark = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Circle cx={24} cy={24} r={21} fill="#9C27B0" />
        <Path d="M16.7 28.2c0-3.8-7.3-2.2-7.3-8.1 0-.7.4-4.8 5.5-4.8s5.4 4.5 5.4 5.3h-3.5c0-.4 0-2.5-2-2.5-1.8 0-1.9 1.7-1.9 2 0 3 7.4 2 7.4 8.1 0 2-1.1 4.8-5.3 4.8-4.7 0-6-3.4-6-5.7h3.5c0 .5-.2 2.8 2.5 2.8 1.8.1 1.7-1.6 1.7-1.9M27.1 15.6 30.3 28l3.2-12.4H38v17.2h-3.5v-4.6l.3-7.2-3.4 11.8H29L25.6 21l.3 7.2v4.6h-3.5V15.6z" />
      </G>
    </Svg>
  );
};