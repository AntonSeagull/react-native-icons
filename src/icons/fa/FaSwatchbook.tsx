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

export const FaSwatchbook = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M434.66 167.71 344.5 77.36a31.83 31.83 0 0 0-45-.07l-.07.07L224 152.88V424l210.66-211.1a32 32 0 0 0 0-45.19M480 320H373.09L186.68 506.51c-2.06 2.07-4.5 3.58-6.68 5.49h300a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32M192 32a32 32 0 0 0-32-32H32A32 32 0 0 0 0 32v384a96 96 0 0 0 192 0ZM96 440a24 24 0 1 1 24-24 24 24 0 0 1-24 24m32-184H64v-64h64Zm0-128H64V64h64Z" />
      </G>
    </Svg>
  );
};