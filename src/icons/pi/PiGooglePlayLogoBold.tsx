

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiGooglePlayLogoBold = (props: IconProps) => {

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
          <Path d="M241.79,110.7,74,14.65a20.24,20.24,0,0,0-20.12.06A19.62,19.62,0,0,0,44,31.84V224.16a19.62,19.62,0,0,0,9.91,17.13,20.22,20.22,0,0,0,20.12.06l167.76-96a19.76,19.76,0,0,0,0-34.6ZM68,203V53l75,75ZM160,145l12.4,12.4-58,33.2ZM114.41,65.43l58,33.2L160,111ZM194,145l-17-17,17-17,29.72,17Z" />
        </G>
      </Svg>
    );
  }

