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

export const CgCamera = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M4 4.5v2h8v1H3a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h12a3 3 0 0 0 2.99-2.751L24 17.5v-8l-6.01.751A3 3 0 0 0 15 7.5h-1v-2a1 1 0 0 0-1-1zm14 7.766v2.468l4 .5v-3.468zM16 10.5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};