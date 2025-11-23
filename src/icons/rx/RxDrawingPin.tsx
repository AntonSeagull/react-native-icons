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

export const RxDrawingPin = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 15 15"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 7.5, 7.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="currentColor" fillRule="evenodd" d="M10.329 1.136a.5.5 0 0 0-.708.707l.653.653-4.848 3.637-1.108-1.108a.5.5 0 0 0-.707.707l1.414 1.414 1.06 1.061-3.27 3.27a.5.5 0 1 0 .708.708l3.27-3.27 1.06 1.06 1.415 1.414a.5.5 0 1 0 .707-.707L8.867 9.574l3.637-4.848.653.653a.5.5 0 1 0 .707-.707l-1.06-1.061-1.415-1.414zm-4.19 5.711 4.85-3.637.8.801-3.636 4.85z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};