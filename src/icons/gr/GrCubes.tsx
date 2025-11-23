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

export const GrCubes = (props: IconProps) => {
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
        <Path fill="none" stroke="#000" strokeWidth={2} d="m6.5 10.5 5.5 3 5.5-3v-6l-5.5-3-5.5 3zm0-6 5.5 3 5.5-3m-5.5 3v6zm-11 12 5.5 3 5.5-3v-6l-5.5-3-5.5 3zm0-6 5.5 3 5.5-3m-5.5 3v6zm5.5 3 5.5 3 5.5-3v-6l-5.5-3-5.5 3zm0-6 5.5 3 5.5-3m-5.5 3v6z" />
      </G>
    </Svg>
  );
};