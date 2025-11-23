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

export const DiHeroku = (props: IconProps) => {
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
        <Path fill="#444" d="M7.73 9.828c0 3.552.097 6.459.226 6.459.097 0 1.776-.517 3.746-1.13 2.68-.904 3.972-1.13 5.361-1.066l1.808.097.097 7.492.065 7.524h3.875v-7.88c0-7.653-.032-7.879-.743-8.945-1.292-1.938-4.618-2.358-8.752-1.13l-1.486.452V3.369H7.729zm11.142-4.101a94 94 0 0 0-1.389 2.551c-.065.161.807.258 1.938.258h2.034l1.162-1.873c2.228-3.488 2.261-3.294-.258-3.294h-2.196l-1.292 2.357zM7.73 25.167c0 2.034.129 3.714.258 3.714s1.066-.839 2.099-1.873l1.841-1.873-1.873-1.841c-1.033-1.001-1.97-1.841-2.099-1.841s-.226 1.679-.226 3.714" />
      </G>
    </Svg>
  );
};