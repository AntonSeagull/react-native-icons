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

export const PiImageSquareThin = (props: IconProps) => {
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
        <Path d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M44 208V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4v87l-31.51-31.52a12 12 0 0 0-17 0L55 212h-7a4 4 0 0 1-4-4m164 4H66.34l102.83-102.83a4 4 0 0 1 5.66 0L212 146.34V208a4 4 0 0 1-4 4M96 116a20 20 0 1 0-20-20 20 20 0 0 0 20 20m0-32a12 12 0 1 1-12 12 12 12 0 0 1 12-12" />
      </G>
    </Svg>
  );
};