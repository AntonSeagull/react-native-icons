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

export const PiBeltBold = (props: IconProps) => {
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
        <Path d="M244 156h-48v-56h48a12 12 0 0 0 0-24h-52a20 20 0 0 0-16-8h-64a20 20 0 0 0-16 8H67.3a12 12 0 0 0-22.6 0H12a12 12 0 0 0 0 24h32v56H12a12 12 0 0 0 0 24h32.7a12 12 0 0 0 22.6 0H96a20 20 0 0 0 16 8h64a20 20 0 0 0 16-8h52a12 12 0 0 0 0-24M68 100h24v56H68Zm48-8h56v24h-28a12 12 0 0 0 0 24h28v24h-56Z" />
      </G>
    </Svg>
  );
};