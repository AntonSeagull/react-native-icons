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

export const VscDebugAltSmall = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m7.293 9.006-.88.88A2.484 2.484 0 0 0 4 8a2.49 2.49 0 0 0-2.413 1.886l-.88-.88L0 9.712l1.147 1.146-.147.146v1H0v.999h1v.053q.077.49.273.946L0 15.294.707 16l1.1-1.099A2.87 2.87 0 0 0 4 16a2.88 2.88 0 0 0 2.193-1.099L7.293 16 8 15.294l-1.273-1.292A4 4 0 0 0 7 13.036v-.067h1v-.965H7v-1l-.147-.146L8 9.712zM4 9.006a1.5 1.5 0 0 1 1.5 1.499h-3A1.5 1.5 0 0 1 4 9.006m2 3.997A2.22 2.22 0 0 1 4 15a2.22 2.22 0 0 1-2-1.998v-1.499h4z" />
        <Path fillRule="evenodd" d="M5 2.41 5.78 2l9 6v.83L9 12.683v-1.2l4.6-3.063L6 3.35V7H5z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};