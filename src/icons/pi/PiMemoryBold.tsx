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

export const PiMemoryBold = (props: IconProps) => {
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
        <Path d="M232 52H24A20 20 0 0 0 4 72v128a12 12 0 0 0 24 0v-12h20v12a12 12 0 0 0 24 0v-12h20v12a12 12 0 0 0 24 0v-12h24v12a12 12 0 0 0 24 0v-12h20v12a12 12 0 0 0 24 0v-12h20v12a12 12 0 0 0 24 0V72a20 20 0 0 0-20-20M28 76h200v88H28Zm92 64v-40a12 12 0 0 0-12-12H56a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h52a12 12 0 0 0 12-12m-24-12H68v-16h28Zm52 24h52a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12h-52a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12m12-40h28v16h-28Z" />
      </G>
    </Svg>
  );
};