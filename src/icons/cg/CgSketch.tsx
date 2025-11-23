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

export const CgSketch = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M5.209 3h13.694l1.209 7.253-8.056 10.933L4 10.253zm1.694 2-.791 4.747 5.944 8.067L18 9.747 17.209 5z" clipRule="evenodd" />
        <Path fill="currentColor" d="M8.056 8h8v2h-8z" />
      </G>
    </Svg>
  );
};