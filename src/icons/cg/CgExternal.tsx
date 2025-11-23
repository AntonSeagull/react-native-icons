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

export const CgExternal = (props: IconProps) => {
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
        <Path fill="currentColor" d="M15.64 7.025h-3.622v-2h7v7h-2v-3.55l-4.914 4.914-1.414-1.414z" />
        <Path fill="currentColor" d="M10.982 6.975h-6v12h12v-6h-2v4h-8v-8h4z" />
      </G>
    </Svg>
  );
};