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

export const PiHardHatDuotone = (props: IconProps) => {
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
        <Path d="M104 51.31V160H40v-24a88 88 0 0 1 64-84.69m48 0V160h64v-24a88 88 0 0 0-64-84.69" opacity={0.2} />
        <Path d="M224 152v-16a96.37 96.37 0 0 0-64-90.51V40a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v5.49A96.37 96.37 0 0 0 32 136v16a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-24a16 16 0 0 0-16-16m-16-16v16h-48V62.67A80.36 80.36 0 0 1 208 136m-64-96v112h-32V40Zm-96 96a80.36 80.36 0 0 1 48-73.33V152H48Zm176 56H32v-24h192z" />
      </G>
    </Svg>
  );
};