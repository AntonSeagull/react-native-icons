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

export const WiRaindrop = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 30 30"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 15, 15)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M9.81 15.25c0 .92.23 1.78.7 2.57s1.1 1.43 1.9 1.9 1.66.71 2.59.71 1.8-.24 2.61-.71a5.3 5.3 0 0 0 1.92-1.9c.47-.8.71-1.65.71-2.57 0-.6-.17-1.31-.52-2.14s-.77-1.6-1.26-2.3c-.44-.57-.96-1.2-1.56-1.88s-1.65-1.73-1.89-1.97l-1.28 1.29c-.62.6-1.22 1.29-1.79 2.08s-1.07 1.64-1.49 2.55c-.44.91-.64 1.7-.64 2.37" />
      </G>
    </Svg>
  );
};