

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMicrophone2Off = (props: IconProps) => {

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
          <Path  d="M16.908 12.917a5 5 0 1 0 -5.827 -5.819" />
          <Path  d="M10.116 10.125l-6.529 7.46a2 2 0 1 0 2.827 2.83l7.461 -6.529" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

