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

export const VscAzureDevops = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M15 3.622v8.512L11.5 15l-5.425-1.975v1.957l-3.071-4.01 8.951.698V4.006zm-2.984.428L6.994 1v2.001L2.383 4.356 1 6.13v4.029l1.978.874V5.868z" />
      </G>
    </Svg>
  );
};