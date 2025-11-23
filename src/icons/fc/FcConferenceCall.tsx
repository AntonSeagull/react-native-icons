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

export const FcConferenceCall = (props: IconProps) => {
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
        <Circle cx={12} cy={21} r={5} fill="#FFA726" />
        <Path d="M2 34.7s2.8-6.3 10-6.3 10 6.3 10 6.3V38H2zM46 34.7s-2.8-6.3-10-6.3-10 6.3-10 6.3V38h20z" />
        <Circle cx={24} cy={17} r={6} fill="#FFB74D" />
        <Path fill="#607D8B" d="M36 34.1s-3.3-7.5-12-7.5-12 7.5-12 7.5V38h24z" />
        <Circle cx={36} cy={21} r={5} fill="#FFA726" />
        <Circle cx={12} cy={21} r={5} fill="#FFA726" />
        <Circle cx={36} cy={21} r={5} fill="#FFA726" />
      </G>
    </Svg>
  );
};