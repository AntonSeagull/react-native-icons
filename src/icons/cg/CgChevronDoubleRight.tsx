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

export const CgChevronDoubleRight = (props: IconProps) => {
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
        <Path fill="currentColor" d="M5.636 7.757 7.05 6.343 12.707 12 7.05 17.657l-1.414-1.414L9.88 12z" />
        <Path fill="currentColor" d="m12.707 6.343-1.414 1.414L15.536 12l-4.243 4.243 1.414 1.414L18.364 12z" />
      </G>
    </Svg>
  );
};