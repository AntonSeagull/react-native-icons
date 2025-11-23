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

export const PiCursorBold = (props: IconProps) => {
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
        <Path d="m224.15 179.17-46.83-46.82 37.93-13.51.76-.3a20 20 0 0 0-1.76-37.27L54.16 29A20 20 0 0 0 29 54.16l52.27 160.08a20 20 0 0 0 37.27 1.76c.11-.25.21-.5.3-.76l13.51-37.92 46.83 46.82a20 20 0 0 0 28.28 0l16.69-16.68a20 20 0 0 0 0-28.29m-30.83 25.17-48.48-48.48A20 20 0 0 0 130.7 150a20.7 20.7 0 0 0-3.74.35A20 20 0 0 0 112.35 162c-.11.25-.21.5-.3.76L100.4 195.5 54.29 54.29l141.21 46.1-32.71 11.66c-.26.09-.51.19-.76.3a20 20 0 0 0-6.17 32.48l48.49 48.48Z" />
      </G>
    </Svg>
  );
};