

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMarkdownOff = (props: IconProps) => {

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
          <Path  d="M9 5h10a2 2 0 0 1 2 2v10" />
          <Path  d="M19 19h-14a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 1.85 -2" />
          <Path  d="M7 15v-6l2 2l1 -1m1 1v4" />
          <Path  d="M17.5 13.5l.5 -.5m-2 -1v-3" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

