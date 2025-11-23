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

export const TbBrandBaidu = (props: IconProps) => {
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
        <Path d="M4 9.5a1 1.5 0 1 0 2 0 1 1.5 0 1 0-2 0M14.463 11.596c1.282 1.774 3.476 3.416 3.476 3.416s1.921 1.574.593 3.636S13.64 19.8 13.64 19.8s-1.416-.44-3.06-.088c-1.644.356-3.06.22-3.06.22s-2.055-.22-2.47-2.304 1.918-3.638 2.102-3.858c.182-.222 1.409-.966 2.284-2.394s3.337-2.287 5.027.221zM8 4.5a1 1.5 0 1 0 2 0 1 1.5 0 1 0-2 0M14 4.5a1 1.5 0 1 0 2 0 1 1.5 0 1 0-2 0M18 9.5a1 1.5 0 1 0 2 0 1 1.5 0 1 0-2 0" />
      </G>
    </Svg>
  );
};