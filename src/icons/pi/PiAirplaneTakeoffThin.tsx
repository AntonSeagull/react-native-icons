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

export const PiAirplaneTakeoffThin = (props: IconProps) => {
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
        <Path d="M172 216a4 4 0 0 1-4 4H24a4 4 0 0 1 0-8h144a4 4 0 0 1 4 4m71.93-123.59a4 4 0 0 1-1.88 2.7l-147.41 88a36.15 36.15 0 0 1-18.2 4.95 35.78 35.78 0 0 1-24.55-9.79l-36.16-35.38a12 12 0 0 1 3.44-19.68l3.07-1.5a4 4 0 0 1 3-.2l30 10.13L81.5 115.8 55.91 91a12 12 0 0 1 3.36-19.89l.16-.06 7.15-2.71a4 4 0 0 1 2.8 0l55.73 20.46L178.32 57a35.83 35.83 0 0 1 46.14 8.22l18.69 24a4 4 0 0 1 .78 3.19m-9.87-1.85-15.85-20.32a27.85 27.85 0 0 0-35.81-6.33l-54.82 32.73a4 4 0 0 1-3.44.32L68 76.31l-5.66 2.14a4 4 0 0 0-1 6.62 1 1 0 0 0 .11.11l29.35 28.49a4 4 0 0 1-.72 6.29l-32.22 19.48a4 4 0 0 1-3.35.37l-30.23-10.2-1.67.82-.18.09a4 4 0 0 0-1.16 6.59l36.15 35.39a27.82 27.82 0 0 0 33.16 3.72Z" />
      </G>
    </Svg>
  );
};