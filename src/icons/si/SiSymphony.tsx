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

export const SiSymphony = (props: IconProps) => {
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
        <Path d="M20.471 8.118v-4.22c0-.864-.468-1.677-1.22-2.12C18.124 1.113 15.684 0 12 0S5.876 1.113 4.75 1.777a2.48 2.48 0 0 0-1.22 2.12v6.338l13.412 3.882v2.824c0 .382-.24.65-.648.849L12 19.941l-4.315-2.162c-.386-.188-.626-.456-.626-.838v-2.118L3.53 13.764v3.177c0 1.744 1 3.228 2.588 4.001L12 24l5.86-3.047c1.61-.784 2.61-2.268 2.61-4.011v-5.294L7.059 7.765V4.542C8.017 4.08 9.651 3.529 12 3.529s3.983.55 4.941 1.013v2.517z" />
      </G>
    </Svg>
  );
};