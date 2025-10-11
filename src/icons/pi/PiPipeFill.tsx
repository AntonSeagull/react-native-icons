

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiPipeFill = (props: IconProps) => {

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
          <Path d="M232,104H208V56h24a8,8,0,0,0,0-16H205.83A16,16,0,0,0,192,32H176a16,16,0,0,0-13.83,8H144A104.11,104.11,0,0,0,40,144v18.16A16,16,0,0,0,32,176v16a16,16,0,0,0,8,13.84V232a8,8,0,0,0,16,0V208h48v24a8,8,0,0,0,16,0V205.84A16,16,0,0,0,128,192V176a16,16,0,0,0-8-13.84V144a24,24,0,0,1,24-24h18.17A16,16,0,0,0,176,128h16a16,16,0,0,0,13.83-8H232a8,8,0,0,0,0-16ZM112,192H48V176h64Zm64-80V48h16v63.8c0,.07,0,.13,0,.2Z" />
        </G>
      </Svg>
    );
  }

