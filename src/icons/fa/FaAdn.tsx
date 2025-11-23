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

export const FaAdn = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 496 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 248, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m248 167.5 64.9 98.8H183.1zM496 256c0 136.9-111.1 248-248 248S0 392.9 0 256 111.1 8 248 8s248 111.1 248 248m-99.8 82.7L248 115.5 99.8 338.7h30.4l33.6-51.7h168.6l33.6 51.7z" />
      </G>
    </Svg>
  );
};