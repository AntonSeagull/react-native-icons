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

export const TfiInfinite = (props: IconProps) => {
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
        <Path d="M17 8c0 2.206-1.794 4-4 4a3.98 3.98 0 0 1-3.074-1.452l-.002.001-.014-.018c-.011-.014-.026-.023-.038-.038l.004-.003-3.634-4.482A3 3 0 0 0 4 5C2.346 5 1 6.346 1 8s1.346 3 3 3c.915 0 1.769-.41 2.342-1.125l.009.007.817-1.012.778.628-.823 1.019-.01-.008A3.98 3.98 0 0 1 4 12c-2.206 0-4-1.794-4-4s1.794-4 4-4c1.12 0 2.186.477 2.943 1.301l.008-.006.042.052 3.698 4.56A2.98 2.98 0 0 0 13 11c1.654 0 3-1.346 3-3s-1.346-3-3-3c-.846 0-1.65.362-2.22.989l-.948 1.175-.778-.628.948-1.175-.004-.003A4 4 0 0 1 13 4c2.206 0 4 1.794 4 4" />
      </G>
    </Svg>
  );
};