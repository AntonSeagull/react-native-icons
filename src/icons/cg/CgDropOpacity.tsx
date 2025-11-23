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

export const CgDropOpacity = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M15.945 21.956A9 9 0 0 1 5.635 7.5l6.365-6.364L18.364 7.5a9 9 0 0 1 1.991 3.012 9 9 0 0 1-1.991 9.716 9 9 0 0 1-2.419 1.728M7.05 8.914 12 3.964l4.95 4.95a6.98 6.98 0 0 1 2.048 4.783H5.002A6.98 6.98 0 0 1 7.05 8.914" clipRule="evenodd" />
      </G>
    </Svg>
  );
};