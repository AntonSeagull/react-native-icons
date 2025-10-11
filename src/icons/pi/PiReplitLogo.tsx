

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiReplitLogo = (props: IconProps) => {

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
          <Path d="M216,88H152V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V88a16,16,0,0,0,16,16h64v48H72a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V168h64a16,16,0,0,0,16-16V104A16,16,0,0,0,216,88ZM136,216H72V168h64Zm0-176V88H72V40h64Zm80,112H152V104h64Z" />
        </G>
      </Svg>
    );
  }

