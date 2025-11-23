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

export const PiGasCanThin = (props: IconProps) => {
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
        <Path d="M200 28h-76.69a12 12 0 0 0-8.48 3.51l-13.17 13.18-13.17-13.18a12 12 0 0 0-17 0l-24 24a12 12 0 0 0 0 17l13.2 13.15-13.17 13.17a11.9 11.9 0 0 0-3.52 8.48V216a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12M53.17 66.83a4 4 0 0 1 0-5.66l24-24a4 4 0 0 1 5.66 0L96 50.34 66.34 80ZM204 216a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V107.31a4 4 0 0 1 1.17-2.82l16-16 35.31-35.31 16-16a4 4 0 0 1 2.83-1.18H200a4 4 0 0 1 4 4ZM180 64a4 4 0 0 1-4 4h-40a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4m-1.6 59.2L134.67 156l43.73 32.8a4 4 0 0 1-4.8 6.4L128 161l-45.6 34.2a4 4 0 0 1-4.8-6.4l43.73-32.8-43.73-32.8a4 4 0 0 1 4.8-6.4L128 151l45.6-34.2a4 4 0 1 1 4.8 6.4" />
      </G>
    </Svg>
  );
};