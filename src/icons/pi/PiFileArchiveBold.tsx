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

export const PiFileArchiveBold = (props: IconProps) => {
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
        <Path d="m216.49 79.51-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.49M183 80h-23V57Zm-67 132v-20h8a12 12 0 0 0 0-24h-8v-16h8a12 12 0 0 0 0-24h-8v-12a12 12 0 0 0-24 0v12h-8a12 12 0 0 0 0 24h8v16h-8a12 12 0 0 0 0 24h8v20H60V44h76v48a12 12 0 0 0 12 12h48v108Z" />
      </G>
    </Svg>
  );
};