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

export const Imf = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M15.802 2.102C14.072.791 11.409.008 8.678.008c-3.377 0-6.129 1.179-7.549 3.235C.462 4.208.093 5.352.032 6.641c-.054 1.148.139 2.418.573 3.784C2.087 5.981 6.227 2.502 11 2.502c0 0-4.466 1.175-7.274 4.816A10.535 10.535 0 0 0 2.2 10.037 15.4 15.4 0 0 0 1 16.002h2s-.304-1.91.224-4.106a18 18 0 0 0 2.357.177c1.839 0 3.146-.398 4.115-1.252.868-.765 1.347-1.794 1.854-2.882.774-1.663 1.651-3.547 4.198-5.002a.5.5 0 0 0 .054-.833z" />
      </G>
    </Svg>
  );
};