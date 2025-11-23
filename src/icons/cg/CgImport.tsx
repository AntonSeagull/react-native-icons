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

export const CgImport = (props: IconProps) => {
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
        <Path fill="currentColor" d="M5 9.982v10h14v-10h-4v-2h6v14H3v-14h6v2z" />
        <Path fill="currentColor" d="M13 2h-2v12.053l-2.535-2.536-1.415 1.415 4.95 4.95 4.95-4.95-1.414-1.415L13 14.054z" />
      </G>
    </Svg>
  );
};