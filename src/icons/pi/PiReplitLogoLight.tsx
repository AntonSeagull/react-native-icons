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

export const PiReplitLogoLight = (props: IconProps) => {
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
        <Path d="M216 90h-66V40a14 14 0 0 0-14-14H72a14 14 0 0 0-14 14v48a14 14 0 0 0 14 14h66v52H72a14 14 0 0 0-14 14v48a14 14 0 0 0 14 14h64a14 14 0 0 0 14-14v-50h66a14 14 0 0 0 14-14v-48a14 14 0 0 0-14-14m-78 126a2 2 0 0 1-2 2H72a2 2 0 0 1-2-2v-48a2 2 0 0 1 2-2h66Zm0-126H72a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h64a2 2 0 0 1 2 2Zm80 62a2 2 0 0 1-2 2h-66v-52h66a2 2 0 0 1 2 2Z" />
      </G>
    </Svg>
  );
};