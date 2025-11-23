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

export const CiFilter = (props: IconProps) => {
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
        <Path d="M14.037 20.937a1 1 0 0 1-.518-.145l-3.334-2a2.55 2.55 0 0 1-1.233-2.176v-4.525a1.53 1.53 0 0 0-.284-.891L4.013 4.658a1.01 1.01 0 0 1 .822-1.6h14.33a1.009 1.009 0 0 1 .822 1.6L15.332 11.2a1.53 1.53 0 0 0-.285.891v7.834a1.013 1.013 0 0 1-1.01 1.012M4.835 4.063l4.647 6.557a2.5 2.5 0 0 1 .47 1.471v4.524a1.54 1.54 0 0 0 .747 1.318l3.334 2 .014-7.843a2.5 2.5 0 0 1 .471-1.471l4.654-6.542Z" />
      </G>
    </Svg>
  );
};