

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiMapPinSimpleDuotone = (props: IconProps) => {

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
          <Path d="M176,72a48,48,0,1,1-48-48A48,48,0,0,1,176,72Z" />
          <Path d="M184,72a56,56,0,1,0-64,55.42V232a8,8,0,0,0,16,0V127.42A56.09,56.09,0,0,0,184,72Zm-56,40a40,40,0,1,1,40-40A40,40,0,0,1,128,112Z" />
        </G>
      </Svg>
    );
  }

