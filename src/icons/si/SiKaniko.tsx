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

export const SiKaniko = (props: IconProps) => {
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
        <Path d="M2.783 0h18.434c1.352 0 2.478.963 2.73 2.24a17.1 17.1 0 0 1-3.2 4.42 16.9 16.9 0 0 1-8.399 4.605V3.304h-.696V11.4c-.976.169-1.965.253-2.956.252v.696q1.518.002 2.956.252v8.096h.696v-7.961a16.9 16.9 0 0 1 8.399 4.605 17.1 17.1 0 0 1 3.2 4.42 2.78 2.78 0 0 1-2.73 2.24H2.783A2.783 2.783 0 0 1 0 21.217V2.783A2.783 2.783 0 0 1 2.783 0m18.456 7.152A17.7 17.7 0 0 0 24 3.572v16.856a17.7 17.7 0 0 0-2.761-3.58 17.8 17.8 0 0 0-8.891-4.815v-.066a17.8 17.8 0 0 0 8.891-4.815" />
      </G>
    </Svg>
  );
};