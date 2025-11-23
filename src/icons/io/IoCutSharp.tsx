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

export const IoCutSharp = (props: IconProps) => {
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
        <Path d="M480 128h-48l-198.94 70.46-59.13-31.59a72.16 72.16 0 1 0-25.69 41.47l52.2 31.72L192 277l-43.64 26.76a71.74 71.74 0 1 0 24.79 38L480 160Zm-376.52 64a40 40 0 1 1 40-40 40 40 0 0 1-40 40m0 208a40 40 0 1 1 40-40 40 40 0 0 1-40 40m152-144a16 16 0 1 1 16-16 16 16 0 0 1-16 16" />
        <Path d="m343.79 259.87-83.74 48.18L432 368h47.99l.01-32z" />
      </G>
    </Svg>
  );
};