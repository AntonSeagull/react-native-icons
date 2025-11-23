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

export const LuFileCog = (props: IconProps) => {
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
        <Path d="M14 2v4a2 2 0 0 0 2 2h4M2.305 15.53l.923-.382M3.228 12.852l-.924-.383" />
        <Path d="M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5M4.852 11.228l-.383-.923M4.852 16.772l-.383.924M7.148 11.228l.383-.923M7.53 17.696l-.382-.924M8.772 12.852l.923-.383M8.772 15.148l.923.383" />
        <Circle cx={6} cy={14} r={3} />
      </G>
    </Svg>
  );
};