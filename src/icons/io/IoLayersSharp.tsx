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

export const IoLayersSharp = (props: IconProps) => {
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
        <Path d="M480 150 256 48 32 150l224 104zM255.71 392.95l-144.81-66.2L32 362l224 102 224-102-78.69-35.3z" />
        <Path d="m480 256-75.53-33.53L256.1 290.6l-148.77-68.17L32 256l224 102z" />
      </G>
    </Svg>
  );
};