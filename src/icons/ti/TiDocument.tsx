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

export const TiDocument = (props: IconProps) => {
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
        <Path d="m19.707 7.293-4-4A1 1 0 0 0 15 3H7C5.346 3 4 4.346 4 6v12c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3V8a1 1 0 0 0-.293-.707M17.586 8H16.5c-.827 0-1.5-.673-1.5-1.5V5.414zM17 19H7a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h7v1.5C14 7.879 15.121 9 16.5 9H18v9a1 1 0 0 1-1 1" />
      </G>
    </Svg>
  );
};