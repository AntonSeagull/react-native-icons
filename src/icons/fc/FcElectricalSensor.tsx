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

export const FcElectricalSensor = (props: IconProps) => {
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
        <Circle cx={32} cy={24} r={9} fill="#B2EBF2" />
        <Path fill="#4DD0E1" d="M32 12c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12m0 20c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8" />
        <Path d="M25.4 22 19.8 5.1l-6.2 22.6-2.2-5.7H4v4h4.6l5.8 14.3 5.8-21.4 2.4 7.1H30v-4z" />
        <Circle cx={32} cy={24} r={4} />
      </G>
    </Svg>
  );
};