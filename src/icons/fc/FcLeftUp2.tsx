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

export const FcLeftUp2 = (props: IconProps) => {
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
        <Path fill="#3F51B5" d="m19 4 11.7 14H7.3z" />
        <Path fill="#3F51B5" d="M27 42h13v-8H27c-2.2 0-4-1.8-4-4V13h-8v17c0 6.6 5.4 12 12 12" />
      </G>
    </Svg>
  );
};