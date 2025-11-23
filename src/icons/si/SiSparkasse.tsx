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

export const SiSparkasse = (props: IconProps) => {
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
        <Path d="M7.06 12.306v1.846h14.175v6.777c.03 1.661-1.406 3.107-3.07 3.07H5.835c-1.658.031-3.1-1.412-3.07-3.07v-1.225h14.143v-1.846H2.765v-6.777c-.03-1.658 1.412-3.101 3.07-3.07h12.33c1.664-.037 3.1 1.41 3.07 3.07v1.225zm4.924-6.148a3.079 3.079 0 1 0 0-6.158 3.079 3.079 0 0 0 0 6.158" />
      </G>
    </Svg>
  );
};