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

export const CgAbstract = (props: IconProps) => {
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
        <Path fill="currentColor" d="M5 5h14v14h-3V8H5z" />
        <Path fill="currentColor" fillRule="evenodd" d="M10 19a5 5 0 1 0 0-10 5 5 0 0 0 0 10m0-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4" clipRule="evenodd" />
      </G>
    </Svg>
  );
};