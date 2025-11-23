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

export const RxSewingPin = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M6 3.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m2 2.45a2.5 2.5 0 1 0-1 0v7.55a.5.5 0 0 0 1 0z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};