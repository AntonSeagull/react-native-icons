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

export const LuWifiCog = (props: IconProps) => {
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
        <Path d="m14.305 19.53.923-.382M15.228 16.852l-.923-.383M16.852 15.228l-.383-.923M16.852 20.772l-.383.924M19.148 15.228l.383-.923M19.53 21.696l-.382-.924M2 7.82a15 15 0 0 1 20 0M20.772 16.852l.924-.383M20.772 19.148l.924.383M5 11.858a10 10 0 0 1 11.5-1.785M8.5 15.429a5 5 0 0 1 2.413-1.31" />
        <Circle cx={18} cy={18} r={3} />
      </G>
    </Svg>
  );
};