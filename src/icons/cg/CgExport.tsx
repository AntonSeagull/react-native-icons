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

export const CgExport = (props: IconProps) => {
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
        <Path fill="currentColor" d="m16.95 5.968-1.414 1.414L13 4.846v12.196h-2V4.847L8.465 7.382 7.05 5.968 12 1.018z" />
        <Path fill="currentColor" d="M5 20.982v-10h4v-2H3v14h18v-14h-6v2h4v10z" />
      </G>
    </Svg>
  );
};