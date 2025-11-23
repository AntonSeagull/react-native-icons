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

export const TiVolume = (props: IconProps) => {
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
        <Path d="M17.138 5.824c-.449 0-.905.152-1.356.453L13.11 8.058C12.357 8.561 10.904 9 10 9c-1.654 0-3 1.346-3 3v2c0 1.654 1.346 3 3 3 .904 0 2.357.439 3.109.941l2.672 1.781c.451.301.907.453 1.356.453.898.001 1.863-.68 1.863-2.175V8c0-1.495-.965-2.176-1.862-2.176M14 16.146C12.907 15.495 11.211 15 10 15a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1c1.211 0 2.907-.495 4-1.146zM17 18l-.006.12-.104-.062-1.89-1.26V9.202l1.891-1.261.104-.062L17 8z" />
      </G>
    </Svg>
  );
};