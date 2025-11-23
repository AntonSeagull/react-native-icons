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

export const FcFlowChart = (props: IconProps) => {
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
        <Path fill="#CFD8DC" d="M35 36h4V22H26v-9h-4v9H9v14h4V26h9v10h4V26h9z" />
        <Path fill="#3F51B5" d="M17 6h14v10H17z" />
        <Path fill="#00BCD4" d="M32 32h10v10H32zM6 32h10v10H6zM19 32h10v10H19z" />
      </G>
    </Svg>
  );
};