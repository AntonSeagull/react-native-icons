

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTableLight = (props: IconProps) => {

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
          <Path d="M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50ZM38,110H82v36H38Zm56,0H218v36H94ZM218,62V98H38V62ZM38,192V158H82v36H40A2,2,0,0,1,38,192Zm178,2H94V158H218v34A2,2,0,0,1,216,194Z" />
        </G>
      </Svg>
    );
  }

