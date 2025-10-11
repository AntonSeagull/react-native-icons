

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiNumberSevenThin = (props: IconProps) => {

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
          <Path d="M171.83,49.15l-48,160A4,4,0,0,1,120,212a3.82,3.82,0,0,1-1.15-.17,4,4,0,0,1-2.68-5L162.62,52H88a4,4,0,0,1,0-8h80a4,4,0,0,1,3.83,5.15Z" />
        </G>
      </Svg>
    );
  }

