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

export const CgChevronDoubleUpO = (props: IconProps) => {
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
        <Path fill="currentColor" d="m14.828 12.707 1.415-1.414L12 7.05l-4.243 4.243 1.415 1.414L12 9.88z" />
        <Path fill="currentColor" d="m14.828 16.95 1.415-1.414L12 11.293l-4.243 4.243 1.415 1.414L12 14.12z" />
        <Path fill="currentColor" fillRule="evenodd" d="M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1 1 5.925 1 12m2 0a9 9 0 1 0 18 0 9 9 0 0 0-18 0" clipRule="evenodd" />
      </G>
    </Svg>
  );
};