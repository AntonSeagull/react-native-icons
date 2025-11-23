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

export const FcScatterPlot = (props: IconProps) => {
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
        <Path fill="#CFD8DC" d="M9 39V6H7v35h35v-2z" />
        <Circle cx={39} cy={11} r={3} />
        <Circle cx={31} cy={13} r={3} />
        <Circle cx={37} cy={19} r={3} />
        <Circle cx={34} cy={26} r={3} />
        <Circle cx={28} cy={20} r={3} />
        <Circle cx={26} cy={28} r={3} />
        <Circle cx={20} cy={23} r={3} />
        <Circle cx={21} cy={33} r={3} />
        <Circle cx={14} cy={30} r={3} />
      </G>
    </Svg>
  );
};