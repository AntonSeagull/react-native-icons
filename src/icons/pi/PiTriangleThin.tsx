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

export const PiTriangleThin = (props: IconProps) => {
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
        <Path d="M233.34 190.09 145.88 38.22a20.75 20.75 0 0 0-35.76 0L22.66 190.09a19.52 19.52 0 0 0 0 19.71A20.36 20.36 0 0 0 40.54 220h174.92a20.36 20.36 0 0 0 17.86-10.2 19.52 19.52 0 0 0 .02-19.71m-6.94 15.71a12.47 12.47 0 0 1-10.94 6.2H40.54a12.47 12.47 0 0 1-10.94-6.2 11.45 11.45 0 0 1 0-11.72l87.45-151.87a12.76 12.76 0 0 1 21.9 0l87.45 151.87a11.45 11.45 0 0 1 0 11.72" />
      </G>
    </Svg>
  );
};