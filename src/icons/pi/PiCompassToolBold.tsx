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

export const PiCompassToolBold = (props: IconProps) => {
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
        <Path d="M218.68 125.46a12 12 0 1 0-21.37-10.92 75.15 75.15 0 0 1-27.66 29.64l-13.5-30.39A44 44 0 0 0 140 37.68V24a12 12 0 0 0-24 0v13.68a44 44 0 0 0-16.15 76.11L53 219.12A12 12 0 0 0 59.13 235a11.9 11.9 0 0 0 4.87 1 12 12 0 0 0 11-7.13l23.67-53.26A99.5 99.5 0 0 0 128 180a102.8 102.8 0 0 0 29.39-4.32L181 228.87a12 12 0 0 0 11 7.13 11.85 11.85 0 0 0 4.86-1 12 12 0 0 0 6.14-15.88l-23.51-52.9a99.4 99.4 0 0 0 39.19-40.76M128 60a20 20 0 1 1-20 20 20 20 0 0 1 20-20m0 96a75.8 75.8 0 0 1-19.52-2.53l13.3-29.92a43.2 43.2 0 0 0 12.44 0l13.33 30A79 79 0 0 1 128 156" />
      </G>
    </Svg>
  );
};