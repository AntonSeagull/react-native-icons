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

export const SiGooglecloudstorage = (props: IconProps) => {
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
        <Path d="M24 2.4v8.4h-2.4V2.4zM0 10.8h2.4V2.4H0zm3-8.4h18v8.4H3zm12.6 4.2a1.8 1.8 0 1 0 3.6 0 1.8 1.8 0 0 0-3.6 0m-10.8.6H12V6H4.8zm16.8 14.4H24v-8.4h-2.4zM0 21.6h2.4v-8.4H0zm3-8.4h18v8.4H3zm12.6 4.2a1.8 1.8 0 1 0 3.6 0 1.8 1.8 0 0 0-3.6 0M4.8 18H12v-1.2H4.8z" />
      </G>
    </Svg>
  );
};