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

export const PiGavelLight = (props: IconProps) => {
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
        <Path d="m241.91 118.1-16-16a14 14 0 0 0-19.55-.23l-52.23-52.23a14 14 0 0 0-.23-19.55l-16-16a14 14 0 0 0-19.8 0l-64 64a14 14 0 0 0 0 19.8l16 16a14 14 0 0 0 19.55.23l9.87 9.88-66.79 66.79a23 23 0 0 0 32.48 32.49L132 156.49l9.87 9.87a14 14 0 0 0 .23 19.55l16 16a14 14 0 0 0 19.8 0l64-64a14 14 0 0 0 .01-19.81m-91.56 39.76-52.21-52.2 47.52-47.52 52.2 52.2Zm-71.76-52.45-16-16a2 2 0 0 1 0-2.83l64-64a2 2 0 0 1 2.83 0l16 16a2 2 0 0 1 0 2.83l-64 64a2 2 0 0 1-2.83 0M56.73 214.8a11 11 0 0 1-15.52-15.52L108 132.49 123.52 148Zm176.69-85.38-64 64a2 2 0 0 1-2.83 0l-16-16a2 2 0 0 1 0-2.83l64-64a2 2 0 0 1 2.83 0l16 16a2 2 0 0 1 0 2.83" />
      </G>
    </Svg>
  );
};