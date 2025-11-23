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

export const GiCarBattery = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M73 81v46h46V81zm320 0v46h46V81zM25 145v16h462v-16zm0 34v252h462V179zm382 21h18v23h23v18h-23v23h-18v-23h-23v-18h23zM64 223h64v18H64z" />
      </G>
    </Svg>
  );
};