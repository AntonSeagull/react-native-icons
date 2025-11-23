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

export const RxDot = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 15 15"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 7.5, 7.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="currentColor" fillRule="evenodd" d="M7.5 9.125a1.625 1.625 0 1 0 0-3.25 1.625 1.625 0 0 0 0 3.25m0 1a2.625 2.625 0 1 0 0-5.25 2.625 2.625 0 0 0 0 5.25" clipRule="evenodd" />
      </G>
    </Svg>
  );
};