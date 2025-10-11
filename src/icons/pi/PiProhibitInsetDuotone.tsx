

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiProhibitInsetDuotone = (props: IconProps) => {

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
          <Path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" />
          <Path d="M165.66,154.34a8,8,0,0,1-11.32,11.32l-64-64a8,8,0,0,1,11.32-11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" />
        </G>
      </Svg>
    );
  }

