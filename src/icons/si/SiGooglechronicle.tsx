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

export const SiGooglechronicle = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m2.719 4.812 4.812 3v4l-4.812 3Zm0 10 4.812-3v9.375l-3.914-2.389a1.88 1.88 0 0 1-.898-1.6ZM2.719 0h18.562v4.812H2.719Zm4.812 21.188 13.75-8.594v4.618c0 .626-.323 1.208-.854 1.539L12 24Z" />
      </G>
    </Svg>
  );
};