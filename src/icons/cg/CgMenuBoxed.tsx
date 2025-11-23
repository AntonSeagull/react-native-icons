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

export const CgMenuBoxed = (props: IconProps) => {
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
        <Path fill="currentColor" d="M8.016 6.982a1.003 1.003 0 0 0 0 2.006h7.95a1.003 1.003 0 0 0 0-2.006zM7.016 12c0-.552.447-1.003 1-1.003h7.95a1.003 1.003 0 0 1 0 2.006h-7.95c-.553 0-1-.45-1-1.003M8.025 15.012a1.003 1.003 0 0 0 0 2.007h7.95a1.003 1.003 0 0 0 0-2.007z" />
        <Path fill="currentColor" fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1" clipRule="evenodd" />
      </G>
    </Svg>
  );
};