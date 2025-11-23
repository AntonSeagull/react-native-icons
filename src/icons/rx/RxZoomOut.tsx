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

export const RxZoomOut = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M6.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m0 1a4.48 4.48 0 0 0 2.809-.984l2.837 2.838a.5.5 0 0 0 .708-.708L10.016 9.31A4.5 4.5 0 1 0 6.5 11M4.75 6a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 0-1z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};