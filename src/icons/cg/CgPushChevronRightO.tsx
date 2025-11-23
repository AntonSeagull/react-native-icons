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

export const CgPushChevronRightO = (props: IconProps) => {
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
        <Path fill="currentColor" d="M14 8h2v8h-2zM8.703 16.243l-1.415-1.414L10.117 12 7.288 9.172l1.415-1.415L12.945 12z" />
        <Path fill="currentColor" fillRule="evenodd" d="M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11 11-4.925 11-11m-2 0a9 9 0 1 0-18 0 9 9 0 0 0 18 0" clipRule="evenodd" />
      </G>
    </Svg>
  );
};