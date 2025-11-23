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

export const LuUserCog = (props: IconProps) => {
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
        <Path d="M10 15H6a4 4 0 0 0-4 4v2M14.305 16.53l.923-.382M15.228 13.852l-.923-.383M16.852 12.228l-.383-.923M16.852 17.772l-.383.924M19.148 12.228l.383-.923M19.53 18.696l-.382-.924M20.772 13.852l.924-.383M20.772 16.148l.924.383" />
        <Circle cx={18} cy={15} r={3} />
        <Circle cx={9} cy={7} r={4} />
      </G>
    </Svg>
  );
};