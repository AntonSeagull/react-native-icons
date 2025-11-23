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

export const LuMonitorCog = (props: IconProps) => {
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
        <Path d="M12 17v4M14.305 7.53l.923-.382M15.228 4.852l-.923-.383M16.852 3.228l-.383-.924M16.852 8.772l-.383.923M19.148 3.228l.383-.924M19.53 9.696l-.382-.924M20.772 4.852l.924-.383M20.772 7.148l.924.383M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7M8 21h8" />
        <Circle cx={18} cy={6} r={3} />
      </G>
    </Svg>
  );
};