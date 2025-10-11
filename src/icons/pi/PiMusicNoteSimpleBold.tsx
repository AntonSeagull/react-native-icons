

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiMusicNoteSimpleBold = (props: IconProps) => {

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
          <Path d="M211.45,52.51l-80-24A12,12,0,0,0,116,40V140.22A52,52,0,1,0,140,184V56.13l64.55,19.36a12,12,0,1,0,6.9-23ZM88,212a28,28,0,1,1,28-28A28,28,0,0,1,88,212Z" />
        </G>
      </Svg>
    );
  }

