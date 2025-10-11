

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiAlignTopSimpleThin = (props: IconProps) => {

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
          <Path d="M204,32a4,4,0,0,1-4,4H56a4,4,0,0,1,0-8H200A4,4,0,0,1,204,32ZM172,72V224a12,12,0,0,1-12,12H96a12,12,0,0,1-12-12V72A12,12,0,0,1,96,60h64A12,12,0,0,1,172,72Zm-8,0a4,4,0,0,0-4-4H96a4,4,0,0,0-4,4V224a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4Z" />
        </G>
      </Svg>
    );
  }

