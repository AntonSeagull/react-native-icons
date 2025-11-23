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

export const CgHello = (props: IconProps) => {
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
        <Path fill="currentColor" d="M17.5 12a5.49 5.49 0 0 1-1.725 4A5.48 5.48 0 0 1 12 17.5c-1.461 0-2.79-.57-3.775-1.5A5.49 5.49 0 0 1 6.5 12z" />
        <Path fill="currentColor" fillRule="evenodd" d="M1 7a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v10a6 6 0 0 1-6 6H1zm2.75 5a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0" clipRule="evenodd" />
      </G>
    </Svg>
  );
};