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

export const LiaHistorySolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M16 4A11.99 11.99 0 0 0 6 9.344V6H4v7h7v-2H7.375C9.102 8.02 12.297 6 16 6c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16H4c0 6.617 5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m-1 4v9h7v-2h-5V8Z" />
      </G>
    </Svg>
  );
};