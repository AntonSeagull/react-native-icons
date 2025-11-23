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

export const PiTilde = (props: IconProps) => {
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
        <Path d="M222.23 130.59c-14.51 18-28.84 27.6-43.8 29.17a43 43 0 0 1-4.5.24c-19.3 0-35.39-13.1-51-25.8-14.91-12.14-29-23.61-43.7-22-10.51 1.1-21.31 8.72-33 23.28a8 8 0 0 1-12.46-10c14.51-18 28.84-27.6 43.8-29.17 21.32-2.25 38.69 11.89 55.48 25.56 14.91 12.14 29 23.62 43.7 22 10.51-1.1 21.31-8.72 33-23.28a8 8 0 1 1 12.46 10Z" />
      </G>
    </Svg>
  );
};