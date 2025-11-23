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

export const PiDropboxLogoFill = (props: IconProps) => {
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
        <Path d="m188 120-60-40 55.56-37a8 8 0 0 1 8.88 0L238 73.34a8 8 0 0 1 0 13.32ZM72.44 43a8 8 0 0 0-8.88 0L18 73.34a8 8 0 0 0 0 13.32L68 120l60-40ZM238 153.34 188 120l-60 40 55.56 37a8 8 0 0 0 8.88 0L238 166.66a8 8 0 0 0 0-13.32m-220 0a8 8 0 0 0 0 13.32L63.56 197a8 8 0 0 0 8.88 0L128 160l-60-40Zm150.61 52.95-38.37-25.58a4 4 0 0 0-4.44 0l-38.39 25.58a4 4 0 0 0 0 6.65L123.56 237a8 8 0 0 0 8.88 0l36.15-24.1a4 4 0 0 0 0-6.61Z" />
      </G>
    </Svg>
  );
};