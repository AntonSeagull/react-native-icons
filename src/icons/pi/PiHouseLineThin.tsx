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

export const PiHouseLineThin = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M240 212h-20v-85.66l9.17 9.17a4 4 0 1 0 5.66-5.66l-98.34-98.34a12 12 0 0 0-17 0l-98.32 98.34a4 4 0 1 0 5.66 5.66l9.17-9.17V212H16a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8M44 118.34l81.17-81.17a4 4 0 0 1 5.66 0L212 118.34V212h-56v-60a4 4 0 0 0-4-4h-48a4 4 0 0 0-4 4v60H44ZM148 212h-40v-56h40Z" />
      </G>
    </Svg>
  );
};