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

export const PiBookOpenTextThin = (props: IconProps) => {
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
        <Path d="M232 52h-72a36 36 0 0 0-32 19.54A36 36 0 0 0 96 52H24a4 4 0 0 0-4 4v144a4 4 0 0 0 4 4h72a28 28 0 0 1 28 28 4 4 0 0 0 8 0 28 28 0 0 1 28-28h72a4 4 0 0 0 4-4V56a4 4 0 0 0-4-4M96 196H28V60h68a28 28 0 0 1 28 28v121.4A35.94 35.94 0 0 0 96 196m132 0h-68a35.94 35.94 0 0 0-28 13.41V88a28 28 0 0 1 28-28h68ZM160 92h40a4 4 0 0 1 0 8h-40a4 4 0 0 1 0-8m44 36a4 4 0 0 1-4 4h-40a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4m0 32a4 4 0 0 1-4 4h-40a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4" />
      </G>
    </Svg>
  );
};