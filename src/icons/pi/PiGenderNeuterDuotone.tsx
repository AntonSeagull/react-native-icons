

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiGenderNeuterDuotone = (props: IconProps) => {

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
          <Path d="M200,104a72,72,0,1,1-72-72A72,72,0,0,1,200,104Z" />
          <Path d="M208,104a80,80,0,1,0-88,79.6V232a8,8,0,0,0,16,0V183.6A80.11,80.11,0,0,0,208,104Zm-80,64a64,64,0,1,1,64-64A64.07,64.07,0,0,1,128,168Z" />
        </G>
      </Svg>
    );
  }

