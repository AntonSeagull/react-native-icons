

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiBlackBridge = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M256 20a104 104 0 0 0-104 104 104 104 0 0 0 104 104 104 104 0 0 0 104-104A104 104 0 0 0 256 20zM16 256v240h48c64-160 320-160 384 0h48V256h-48v64h-60v-64h-48v64h-60v-64h-48v64h-60v-64h-48v64H64v-64H16z" />
        </G>
      </Svg>
    );
  }

