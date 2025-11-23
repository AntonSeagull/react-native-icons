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

export const TfiHtml5 = (props: IconProps) => {
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
        <Path d="m15.54.5-1.28 14.379L8.48 16.5l-5.74-1.621L1.46.5zm-2.62 2.939H4.08l.47 5.34h6.121l-.222 2.279-1.969.532-1.96-.531-.13-1.399H4.641l.22 2.779 3.62 1h.039v-.01l3.591-.99.5-5.44H6.17l-.15-1.81h6.74z" />
      </G>
    </Svg>
  );
};