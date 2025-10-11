

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCrownOff = (props: IconProps) => {

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
          <Path  d="M18 18h-13l-1.865 -9.327a.25 .25 0 0 1 .4 -.244l4.465 3.571l1.6 -2.4m1.596 -2.394l.804 -1.206l4 6l4.464 -3.571a.25 .25 0 0 1 .401 .244l-1.363 6.818" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

