

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiHouse = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M256 19.27L25.637 249.638 19.27 256 32 268.73l6.363-6.367L256 44.727l217.637 217.636L480 268.73 492.73 256l-6.367-6.363zM96 48v107.273l64-64.002V48zm160 20.727l-192 192V486h64V320h96v166h224V260.727zM288 320h96v80h-96z" />
        </G>
      </Svg>
    );
  }

