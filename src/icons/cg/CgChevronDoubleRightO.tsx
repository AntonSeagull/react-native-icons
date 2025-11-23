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

export const CgChevronDoubleRightO = (props: IconProps) => {
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
        <Path fill="currentColor" d="M8.464 7.757 7.05 9.172 9.88 12 7.05 14.828l1.415 1.415L12.707 12z" />
        <Path fill="currentColor" d="m11.293 9.172 1.414-1.415L16.95 12l-4.243 4.243-1.414-1.415L14.12 12z" />
        <Path fill="currentColor" fillRule="evenodd" d="M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1 1 5.925 1 12m2 0a9 9 0 1 0 18 0 9 9 0 0 0-18 0" clipRule="evenodd" />
      </G>
    </Svg>
  );
};