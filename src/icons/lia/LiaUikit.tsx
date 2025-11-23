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

export const LiaUikit = (props: IconProps) => {
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
        <Path d="m22.2 6.7-4.3 2.5 5.1 2.9v7.8L16 24l-7-4.1v-5.5L5 12v10.5L16 29l11-6.5v-13zm-2-1.2L16 3l-4.2 2.5L16 8z" />
      </G>
    </Svg>
  );
};