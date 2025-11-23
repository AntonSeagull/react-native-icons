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

export const CgDistributeHorizontal = (props: IconProps) => {
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
        <Path stroke="currentColor" strokeOpacity={0.5} strokeWidth={2} d="M11 9h2v6h-2z" />
        <Path fill="currentColor" d="M5 5v14h2V5zM17 5v14h2V5z" />
      </G>
    </Svg>
  );
};