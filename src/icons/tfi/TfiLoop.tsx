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

export const TfiLoop = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M1 9c0 2.206 1.711 4 3.813 4v1C2.159 14 0 11.757 0 9s2.159-5 4.813-5h4.229L7.396 2.354l.707-.707L10.957 4.5 8.104 7.354l-.708-.708L9.043 5h-4.23C2.711 5 1 6.794 1 9m11.187-5v1C14.289 5 16 6.794 16 9s-1.711 4-3.813 4h-4.23l1.646-1.646-.707-.707L6.043 13.5l2.854 2.854.707-.707L7.957 14h4.229C14.841 14 17 11.757 17 9s-2.159-5-4.813-5" />
      </G>
    </Svg>
  );
};