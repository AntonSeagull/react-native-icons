

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowFatLeftThin = (props: IconProps) => {

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
          <Path d="M208,76H124V32a4,4,0,0,0-6.83-2.83l-96,96a4,4,0,0,0,0,5.66l96,96A4,4,0,0,0,124,224V180h84a12,12,0,0,0,12-12V88A12,12,0,0,0,208,76Zm4,92a4,4,0,0,1-4,4H120a4,4,0,0,0-4,4v38.34L29.66,128,116,41.66V80a4,4,0,0,0,4,4h88a4,4,0,0,1,4,4Z" />
        </G>
      </Svg>
    );
  }

