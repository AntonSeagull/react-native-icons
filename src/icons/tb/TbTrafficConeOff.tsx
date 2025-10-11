

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTrafficConeOff = (props: IconProps) => {

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
          <Path  d="M4 20h16" />
          <Path  d="M9.4 10h.6m4 0h.6" />
          <Path  d="M7.8 15h7.2" />
          <Path  d="M6 20l3.5 -10.5" />
          <Path  d="M10.5 6.5l.5 -1.5h2l2 6m2 6l1 3" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

