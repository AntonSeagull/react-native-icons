

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSnowboarding = (props: IconProps) => {

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
          <Path  d="M15 3a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
          <Path  d="M7 19l4 -2.5l-.5 -1.5" />
          <Path  d="M16 21l-1 -6l-4.5 -3l3.5 -6" />
          <Path  d="M7 9l1.5 -3h5.5l2 4l3 1" />
          <Path  d="M3 17c.399 1.154 .899 1.805 1.5 1.951c6 1.464 10.772 2.262 13.5 2.927c1.333 .325 2.333 0 3 -.976" />
        </G>
      </Svg>
    );
  }

