

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiImageSquareBold = (props: IconProps) => {

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
          <Path d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,24v63.72L186.14,97.86a20,20,0,0,0-28.28,0L52,203.72V52ZM85.66,204,172,117.66l32,32V204ZM76,96a20,20,0,1,1,20,20A20,20,0,0,1,76,96Z" />
        </G>
      </Svg>
    );
  }

