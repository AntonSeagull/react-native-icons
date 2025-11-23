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

export const HiMiniMegaphone = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 10, 10)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M13.92 3.845a19.4 19.4 0 0 1-6.3 1.98Q6.336 6 5 6a4 4 0 0 0-.504 7.969 16 16 0 0 0 1.271 3.34c.397.771 1.342 1 2.05.59l.867-.5c.726-.419.94-1.32.588-2.02a12 12 0 0 1-.448-1.004c1.8.357 3.511.963 5.096 1.78A18 18 0 0 0 15 10c0-2.162-.381-4.235-1.08-6.155m1.323-.748A19.5 19.5 0 0 1 16.5 10c0 2.43-.445 4.758-1.257 6.904l-.03.077a.75.75 0 0 0 1.401.537 21 21 0 0 0 1.312-5.745 2 2 0 0 0 0-3.546 21 21 0 0 0-1.312-5.745.75.75 0 0 0-1.4.537z" />
      </G>
    </Svg>
  );
};