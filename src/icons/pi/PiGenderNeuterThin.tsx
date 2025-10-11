

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiGenderNeuterThin = (props: IconProps) => {

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
          <Path d="M204,104a76,76,0,1,0-80,75.89V232a4,4,0,0,0,8,0V179.89A76.09,76.09,0,0,0,204,104Zm-76,68a68,68,0,1,1,68-68A68.07,68.07,0,0,1,128,172Z" />
        </G>
      </Svg>
    );
  }

