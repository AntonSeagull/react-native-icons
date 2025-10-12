

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiDacia = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
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
        <G fill={color} stroke={color}>
          <Path  d="M0 8.646v2.23h8.252v2.248H0v2.23h9.112a.62.62 0 00.489-.201L12 12.819l2.399 2.334a.62.62 0 00.49.201H24v-2.23h-8.252v-2.248H24v-2.23h-9.112a.62.62 0 00-.489.201L12 11.181 9.601 8.847a.62.62 0 00-.49-.201Z" />
        </G>
      </Svg>
    );
  }

