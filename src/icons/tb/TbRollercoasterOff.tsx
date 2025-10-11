

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRollercoasterOff = (props: IconProps) => {

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
          <Path  d="M3 21a5.55 5.55 0 0 0 5.265 -3.795l.735 -2.205a8.759 8.759 0 0 1 2.35 -3.652m2.403 -1.589a8.76 8.76 0 0 1 3.572 -.759h3.675" />
          <Path  d="M20 9v7m0 4v1" />
          <Path  d="M8 21v-3" />
          <Path  d="M12 21v-9" />
          <Path  d="M16 9.5v2.5m0 4v5" />
          <Path  d="M15 3h5v3h-5z" />
          <Path  d="M9.446 5.415l.554 -.415l2 2.5l-.285 .213m-2.268 1.702l-1.447 1.085l-1.8 -.5l-.2 -2l1.139 -.854" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

