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

export const TbHandFingerDown = (props: IconProps) => {
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
        <Path d="M8 12v8.5a1.5 1.5 0 0 0 3 0V13M11 13.5v2a1.5 1.5 0 0 0 3 0V13M14 14.5a1.5 1.5 0 0 0 3 0V13" />
        <Path d="M17 13.5a1.5 1.5 0 0 0 3 0V9a6 6 0 0 0-6-6h-2 .208a6 6 0 0 0-5.012 2.7L7 6q-.468.718-3.286 5.728a1.5 1.5 0 0 0 .536 2.022c.734.44 1.674.325 2.28-.28L8 12" />
      </G>
    </Svg>
  );
};