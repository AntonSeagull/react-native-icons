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

export const PiEjectSimpleBold = (props: IconProps) => {
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
        <Path d="M236 200a12 12 0 0 1-12 12H32a12 12 0 1 1 0-24h192a12 12 0 0 1 12 12M22 152.57a20 20 0 0 1 2.52-21.32l81.64-100.82a28.08 28.08 0 0 1 43.68 0l81.65 100.82A20.1 20.1 0 0 1 215.91 164H40.09A19.9 19.9 0 0 1 22 152.57M48.3 140h159.4l-76.5-94.47a4.11 4.11 0 0 0-6.4 0Z" />
      </G>
    </Svg>
  );
};