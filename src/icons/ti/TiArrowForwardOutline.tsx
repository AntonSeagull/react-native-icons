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

export const TiArrowForwardOutline = (props: IconProps) => {
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
        <Path d="M4 19.999q-.144 0-.286-.042A1 1 0 0 1 3 18.999v-1a9.98 9.98 0 0 1 8-9.796V6.499c0-.534.208-1.036.585-1.414.756-.757 2.075-.756 2.829-.001l6.288 6.203a.996.996 0 0 1 0 1.424l-6.293 6.207c-.746.746-2.067.751-2.823-.005A1.99 1.99 0 0 1 11 17.499v-1.437c-2.495.201-4.523.985-6.164 3.484a1 1 0 0 1-.836.453m8-5.989 1-.01v3.499l5.576-5.5L13 6.503V10s-.384-.004-.891.052a7.98 7.98 0 0 0-6.892 6.08C7.338 14.404 9.768 14.066 12 14.01" />
      </G>
    </Svg>
  );
};