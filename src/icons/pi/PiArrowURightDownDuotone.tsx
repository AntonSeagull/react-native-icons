

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowURightDownDuotone = (props: IconProps) => {

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
          <Path d="M216,176l-48,48-48-48Z" />
          <Path d="M223.39,172.94A8,8,0,0,0,216,168H176V88A64,64,0,0,0,48,88v88a8,8,0,0,0,16,0V88a48,48,0,0,1,96,0v80H120a8,8,0,0,0-5.66,13.66l48,48a8,8,0,0,0,11.32,0l48-48A8,8,0,0,0,223.39,172.94ZM168,212.69,139.31,184h57.38Z" />
        </G>
      </Svg>
    );
  }

