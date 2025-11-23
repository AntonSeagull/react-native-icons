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

export const FcRadarPlot = (props: IconProps) => {
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
        <Path fill="#CFD8DC" d="M38.4 13 24.1 6.4 4.6 12.1l8.8 13.2-2.2 15.1h22.7l6.6-13.3zm-6.3 24.5H14.7l1.8-12.9-7.1-10.7 14.5-4.3L35.6 15l1.8 11.7z" />
        <Circle cx={24} cy={8} r={4} />
        <Circle cx={37} cy={14} r={4} />
        <Circle cx={39} cy={27} r={4} />
        <Circle cx={7} cy={13} r={4} />
        <Circle cx={13} cy={39} r={4} />
        <Circle cx={15} cy={25} r={4} />
        <Circle cx={33} cy={39} r={4} />
      </G>
    </Svg>
  );
};