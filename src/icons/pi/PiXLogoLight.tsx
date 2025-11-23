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

export const PiXLogoLight = (props: IconProps) => {
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
        <Path d="m213.06 212.78-63.42-99.66L212.44 44a6 6 0 1 0-8.88-8L143 102.62l-41.9-65.84A6 6 0 0 0 96 34H48a6 6 0 0 0-5.06 9.22l63.42 99.66L43.56 212a6 6 0 0 0 8.88 8L113 153.38l41.9 65.84A6 6 0 0 0 160 222h48a6 6 0 0 0 5.06-9.22M163.29 210 58.93 46h33.78l104.36 164Z" />
      </G>
    </Svg>
  );
};