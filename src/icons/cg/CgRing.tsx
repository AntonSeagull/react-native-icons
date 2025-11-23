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

export const CgRing = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M6.343 3.686A8 8 0 0 1 7.936 2.45a8.01 8.01 0 0 1 8.128 0 8 8 0 0 1 1.593 1.236L12 9.343zM12 6.514 9.413 3.927a6.02 6.02 0 0 1 5.174 0z" clipRule="evenodd" />
        <Path fill="currentColor" d="M2 12.658a9.98 9.98 0 0 1 3.692-7.76l1.423 1.424a8 8 0 1 0 9.77 0l1.423-1.424A9.98 9.98 0 0 1 22 12.658c0 5.522-4.477 10-10 10s-10-4.478-10-10" />
      </G>
    </Svg>
  );
};