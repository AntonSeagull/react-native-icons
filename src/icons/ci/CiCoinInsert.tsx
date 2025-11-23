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

export const CiCoinInsert = (props: IconProps) => {
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
        <Path d="M21.44 17.7h-3.67a7.48 7.48 0 0 0 1.78-4.86A7.55 7.55 0 1 0 6.23 17.7H2.56a.51.51 0 0 0-.5.5.5.5 0 0 0 .5.5h18.88a.5.5 0 0 0 .5-.5.51.51 0 0 0-.5-.5m-5.03 0H7.62a6.546 6.546 0 1 1 8.78-.01Z" />
        <Path d="M14 13.965a1.616 1.616 0 0 1-1.5 1.61v.65a.485.485 0 0 1-.5.48.49.49 0 0 1-.5-.48v-.64h-.81a.5.5 0 0 1-.5-.5.51.51 0 0 1 .5-.5h1.69a.617.617 0 0 0 .62-.62.623.623 0 0 0-.62-.62h-.75a1.618 1.618 0 0 1-.13-3.23v-.65a.49.49 0 0 1 .5-.48.485.485 0 0 1 .5.48v.64h.81a.5.5 0 0 1 0 1h-1.68a.62.62 0 0 0 0 1.24h.75a1.626 1.626 0 0 1 1.62 1.62" />
      </G>
    </Svg>
  );
};