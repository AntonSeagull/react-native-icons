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

export const RiBallPenLine = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m17.85 11.698-.708-.707-9.9 9.9H3v-4.243L14.314 5.334l5.657 5.657a1 1 0 0 1 0 1.414L12.9 19.477l-1.415-1.415zm-2.122-2.121-1.414-1.414L5 17.477v1.414h1.414zm2.828-7.071 2.829 2.828a1 1 0 0 1 0 1.415L19.97 8.163 15.728 3.92l1.414-1.414a1 1 0 0 1 1.414 0" />
      </G>
    </Svg>
  );
};