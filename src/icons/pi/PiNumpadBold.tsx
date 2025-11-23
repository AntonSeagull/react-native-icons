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

export const PiNumpadBold = (props: IconProps) => {
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
        <Path d="M84 48a20 20 0 1 1-20-20 20 20 0 0 1 20 20m44-20a20 20 0 1 0 20 20 20 20 0 0 0-20-20m64 40a20 20 0 1 0-20-20 20 20 0 0 0 20 20M64 84a20 20 0 1 0 20 20 20 20 0 0 0-20-20m64 0a20 20 0 1 0 20 20 20 20 0 0 0-20-20m64 0a20 20 0 1 0 20 20 20 20 0 0 0-20-20M64 140a20 20 0 1 0 20 20 20 20 0 0 0-20-20m64 0a20 20 0 1 0 20 20 20 20 0 0 0-20-20m0 56a20 20 0 1 0 20 20 20 20 0 0 0-20-20m64-56a20 20 0 1 0 20 20 20 20 0 0 0-20-20" />
      </G>
    </Svg>
  );
};