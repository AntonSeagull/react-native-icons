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

export const PiChecksThin = (props: IconProps) => {
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
        <Path d="m146.8 82.85-89.6 88a4 4 0 0 1-5.6 0l-38.4-37.71a4 4 0 0 1 5.6-5.71l35.6 35 86.8-85.24a4 4 0 0 1 5.6 5.7Zm96-5.65a4 4 0 0 0-5.65 0l-86.8 85.24-21.63-21.24a4 4 0 1 0-5.61 5.7l24.44 24a4 4 0 0 0 5.6 0l89.6-88a4 4 0 0 0 .1-5.7Z" />
      </G>
    </Svg>
  );
};