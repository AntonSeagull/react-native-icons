

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiNumpadBold = (props: IconProps) => {

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
          <Path d="M84,48A20,20,0,1,1,64,28,20,20,0,0,1,84,48Zm44-20a20,20,0,1,0,20,20A20,20,0,0,0,128,28Zm64,40a20,20,0,1,0-20-20A20,20,0,0,0,192,68ZM64,84a20,20,0,1,0,20,20A20,20,0,0,0,64,84Zm64,0a20,20,0,1,0,20,20A20,20,0,0,0,128,84Zm64,0a20,20,0,1,0,20,20A20,20,0,0,0,192,84ZM64,140a20,20,0,1,0,20,20A20,20,0,0,0,64,140Zm64,0a20,20,0,1,0,20,20A20,20,0,0,0,128,140Zm0,56a20,20,0,1,0,20,20A20,20,0,0,0,128,196Zm64-56a20,20,0,1,0,20,20A20,20,0,0,0,192,140Z" />
        </G>
      </Svg>
    );
  }

