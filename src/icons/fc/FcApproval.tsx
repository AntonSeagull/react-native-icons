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

export const FcApproval = (props: IconProps) => {
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
        <Path fill="#8BC34A" d="m24 3 4.7 3.6 5.8-.8 2.2 5.5 5.5 2.2-.8 5.8L45 24l-3.6 4.7.8 5.8-5.5 2.2-2.2 5.5-5.8-.8L24 45l-4.7-3.6-5.8.8-2.2-5.5-5.5-2.2.8-5.8L3 24l3.6-4.7-.8-5.8 5.5-2.2 2.2-5.5 5.8.8z" />
        <Path fill="#CCFF90" d="M34.6 14.6 21 28.2l-5.6-5.6-2.8 2.8 8.4 8.4 16.4-16.4z" />
      </G>
    </Svg>
  );
};