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

export const PiWaveSineBold = (props: IconProps) => {
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
        <Path d="M242.86 133.1c-23 49-43 70.9-64.82 70.9-27.64 0-43.8-34.44-60.9-70.9-7.14-15.32-14.61-31.1-22.22-42.37C88.39 81.09 82.53 76 78 76c-3.82 0-18.24 4.12-43.09 57.1a12 12 0 0 1-21.73-10.2c23-49 43-70.9 64.82-70.9 27.64 0 43.8 34.44 60.9 70.9 7.19 15.32 14.61 31.15 22.22 42.37 6.53 9.64 12.39 14.73 17 14.73 3.82 0 18.24-4.12 43.09-57.1a12 12 0 0 1 21.73 10.2Z" />
      </G>
    </Svg>
  );
};