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

export const LuCalendarCog = (props: IconProps) => {
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
        <Path d="m15.228 16.852-.923-.383M15.228 19.148l-.923.383M16 2v4M16.47 14.305l.382.923M16.852 20.772l-.383.924M19.148 15.228l.383-.923M19.53 21.696l-.382-.924M20.772 16.852l.924-.383M20.772 19.148l.924.383M21 10.592V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6M3 10h18M8 2v4" />
        <Circle cx={18} cy={18} r={3} />
      </G>
    </Svg>
  );
};