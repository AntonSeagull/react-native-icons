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

export const PiFileCloudFill = (props: IconProps) => {
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
        <Path d="M160 181a52.06 52.06 0 0 1-52 51H60.72C40.87 232 24 215.77 24 195.92a36 36 0 0 1 19.28-31.79 4 4 0 0 1 5.77 4.33 63.5 63.5 0 0 0-1 11.15 8.22 8.22 0 0 0 7.5 8.39 8 8 0 0 0 8.45-8 47.55 47.55 0 0 1 4.37-20A48 48 0 0 1 160 181m56-93v128a16 16 0 0 1-16 16h-24a8 8 0 0 1 0-16h24V96h-48a8 8 0 0 1-8-8V40H56v88a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-27.31-8L160 51.31V80Z" />
      </G>
    </Svg>
  );
};