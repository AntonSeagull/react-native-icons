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

export const PiBracketsRoundThin = (props: IconProps) => {
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
        <Path d="M55 62.67C46.34 74.93 36 96.22 36 128s10.34 53.07 19 65.33c9.41 13.3 19 19.19 19.06 19.24A4 4 0 0 1 72 220a4 4 0 0 1-2-.57c-1.77-1.03-42-25.92-42-91.43s40.23-90.4 41.94-91.43a4 4 0 0 1 4.13 6.86c-.07.05-9.65 5.94-19.07 19.24m131.05-26.1a4 4 0 0 0-4.13 6.86c.1 0 9.65 5.94 19.06 19.24 8.67 12.26 19 33.55 19 65.33s-10.34 53.07-19 65.33c-9.41 13.3-19 19.19-19.05 19.24a4 4 0 0 0 4.12 6.86c1.71-1 41.94-25.92 41.94-91.43s-40.22-90.4-41.93-91.43Z" />
      </G>
    </Svg>
  );
};