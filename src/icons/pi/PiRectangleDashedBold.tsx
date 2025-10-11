

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiRectangleDashedBold = (props: IconProps) => {

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
          <Path d="M84,48A12,12,0,0,1,72,60H44V72a12,12,0,0,1-24,0V56A20,20,0,0,1,40,36H72A12,12,0,0,1,84,48ZM32,156a12,12,0,0,0,12-12V112a12,12,0,0,0-24,0v32A12,12,0,0,0,32,156Zm40,40H44V184a12,12,0,0,0-24,0v16a20,20,0,0,0,20,20H72a12,12,0,0,0,0-24Zm72,0H112a12,12,0,0,0,0,24h32a12,12,0,0,0,0-24Zm80-24a12,12,0,0,0-12,12v12H184a12,12,0,0,0,0,24h32a20,20,0,0,0,20-20V184A12,12,0,0,0,224,172Zm0-72a12,12,0,0,0-12,12v32a12,12,0,0,0,24,0V112A12,12,0,0,0,224,100Zm-8-64H184a12,12,0,0,0,0,24h28V72a12,12,0,0,0,24,0V56A20,20,0,0,0,216,36Zm-72,0H112a12,12,0,0,0,0,24h32a12,12,0,0,0,0-24Z" />
        </G>
      </Svg>
    );
  }

