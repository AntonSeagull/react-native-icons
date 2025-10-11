

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiMicroscopeDuotone = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M136,32V136a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V32a8,8,0,0,1,8-8h48A8,8,0,0,1,136,32Z" />
          <Path d="M224,208H203.94A88.05,88.05,0,0,0,144,64.37V32a16,16,0,0,0-16-16H80A16,16,0,0,0,64,32V136a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V80.46A72,72,0,0,1,181.25,208H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16Zm-96-72H80V32h48V136ZM72,184a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z" />
        </G>
      </Svg>
    );
  }

