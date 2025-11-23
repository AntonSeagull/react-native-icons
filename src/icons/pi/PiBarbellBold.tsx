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

export const PiBarbellBold = (props: IconProps) => {
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
        <Path d="M244 116V88a20 20 0 0 0-20-20h-16v-4a20 20 0 0 0-20-20h-24a20 20 0 0 0-20 20v52h-32V64a20 20 0 0 0-20-20H68a20 20 0 0 0-20 20v4H32a20 20 0 0 0-20 20v28a12 12 0 0 0 0 24v28a20 20 0 0 0 20 20h16v4a20 20 0 0 0 20 20h24a20 20 0 0 0 20-20v-52h32v52a20 20 0 0 0 20 20h24a20 20 0 0 0 20-20v-4h16a20 20 0 0 0 20-20v-28a12 12 0 0 0 0-24M36 164V92h12v72Zm52 24H72V68h16Zm96 0h-16V68h16Zm36-24h-12V92h12Z" />
      </G>
    </Svg>
  );
};