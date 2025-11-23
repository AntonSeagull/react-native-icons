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

export const IoBowlingBallOutline = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Circle cx={256} cy={256} r={208} fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={32} />
        <Circle cx={288} cy={200} r={24} fill="currentColor" />
        <Circle cx={296} cy={128} r={24} fill="currentColor" />
        <Circle cx={360} cy={168} r={24} fill="currentColor" />
      </G>
    </Svg>
  );
};