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

export const PiApproximateEquals = (props: IconProps) => {
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
        <Path d="M222.16 153.26a8 8 0 0 1-1 11.25c-17.36 14.38-32.86 19.49-47 19.49-18.58 0-34.82-8.81-49.93-17-25.35-13.75-47.24-25.63-79.07.74a8 8 0 1 1-10.22-12.3c40.17-33.27 70.32-16.92 96.93-2.48 25.35 13.75 47.24 25.62 79.07-.75a8 8 0 0 1 11.22 1.05m-177-49.46c31.83-26.37 53.72-14.5 79.07-.75 15.11 8.2 31.35 17 49.93 17 14.14 0 29.64-5.11 47-19.49a8 8 0 1 0-10.22-12.3c-31.83 26.37-53.72 14.49-79.07.74-26.61-14.43-56.76-30.79-96.93 2.48a8 8 0 0 0 10.17 12.32Z" />
      </G>
    </Svg>
  );
};