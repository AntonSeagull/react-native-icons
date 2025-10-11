

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrTicket = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M7,16 L17,16 L17,8 L7,8 L7,16 Z M20,12 C20,14 21,15 23,15 L23,20 L1,20 L1,15 C3,15 4,14 4,12 C4,10 3,9 1,9 L1,4 L23,4 L23,9 C21,9 20,10 20,12 Z" fill="none" />
        </G>
      </Svg>
    );
  }

