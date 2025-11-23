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

export const CgChevronDoubleDownO = (props: IconProps) => {
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
        <Path fill="currentColor" d="M7.757 8.464 9.172 7.05 12 9.88l2.828-2.829 1.415 1.415L12 12.707z" />
        <Path fill="currentColor" d="m9.172 11.293-1.415 1.414L12 16.95l4.243-4.243-1.415-1.414L12 14.12z" />
        <Path fill="currentColor" fillRule="evenodd" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11m-2 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0" clipRule="evenodd" />
      </G>
    </Svg>
  );
};