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

export const VscPreserveCase = (props: IconProps) => {
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
        <Path d="M8.514 11h-1l-.816-2.16H3.433L2.664 11H1.66l2.954-7.702h.935zM6.403 8.03 5.194 4.748a3 3 0 0 1-.118-.516h-.021Q5 4.56 4.93 4.748L3.733 8.03zM9.597 11V3.298h2.192q.999 0 1.584.489.586.488.586 1.273 0 .654-.355 1.138a1.9 1.9 0 0 1-.977.688v.021q.778.091 1.246.591.467.495.467 1.29 0 .987-.71 1.6-.708.612-1.788.612zm.903-6.886v2.487h.923q.742 0 1.166-.354.424-.36.424-1.01 0-1.123-1.477-1.123zm0 3.298v2.772h1.224q.795 0 1.23-.376.44-.377.44-1.032 0-1.364-1.858-1.364z" />
      </G>
    </Svg>
  );
};