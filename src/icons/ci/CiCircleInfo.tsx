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

export const CiCircleInfo = (props: IconProps) => {
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
        <Path d="M11.5 15a.5.5 0 0 0 1 0v-4.019a.5.5 0 0 0-1 0Z" />
        <Circle cx={12} cy={8.999} r={0.5} />
        <Path d="M12 2.065A9.934 9.934 0 1 1 2.066 12 9.945 9.945 0 0 1 12 2.065m0 18.867A8.934 8.934 0 1 0 3.066 12 8.944 8.944 0 0 0 12 20.932" />
      </G>
    </Svg>
  );
};