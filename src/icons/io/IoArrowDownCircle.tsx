

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoArrowDownCircle = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M256,464c114.87,0,208-93.13,208-208S370.87,48,256,48,48,141.13,48,256,141.13,464,256,464ZM164.64,251.35a16,16,0,0,1,22.63-.09L240,303.58V170a16,16,0,0,1,32,0V303.58l52.73-52.32A16,16,0,1,1,347.27,274l-80,79.39a16,16,0,0,1-22.54,0l-80-79.39A16,16,0,0,1,164.64,251.35Z" />
        </G>
      </Svg>
    );
  }

