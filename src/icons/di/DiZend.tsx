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

export const DiZend = (props: IconProps) => {
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
        <Path fill="#444" d="M15.334 14.023s0-2.972 2.972-2.972h8.917s0 2.972-2.972 2.972zm0 3.798s0-2.972 2.972-2.972h4.459s0 2.972-2.972 2.972zm0 3.798s0-2.972 2.972-2.972h1.486s0 2.972-2.972 2.972zm-.998-2.319v2.371H4.777l6.158-8.399H5.649v-2.371h9.972l-6.129 8.4z" />
      </G>
    </Svg>
  );
};