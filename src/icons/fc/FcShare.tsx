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

export const FcShare = (props: IconProps) => {
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
        <Path fill="#1976D2" d="M38.1 31.2 19.4 24l18.7-7.2c1.5-.6 2.3-2.3 1.7-3.9-.6-1.5-2.3-2.3-3.9-1.7l-26 10C8.8 21.6 8 22.8 8 24s.8 2.4 1.9 2.8l26 10c.4.1.7.2 1.1.2 1.2 0 2.3-.7 2.8-1.9.6-1.6-.2-3.3-1.7-3.9" />
        <Circle cx={11} cy={24} r={7} />
        <Circle cx={37} cy={14} r={7} />
        <Circle cx={37} cy={34} r={7} />
      </G>
    </Svg>
  );
};