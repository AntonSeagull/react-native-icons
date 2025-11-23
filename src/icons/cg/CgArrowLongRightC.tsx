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

export const CgArrowLongRightC = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="m18.73 7.757 4.25 4.236-4.236 4.25-1.416-1.412 1.814-1.82-12.288.042a3.001 3.001 0 1 1-.009-2l12.316-.043-1.843-1.836zM5.02 12.06a1 1 0 1 0-2 .009 1 1 0 0 0 2-.01" clipRule="evenodd" />
      </G>
    </Svg>
  );
};