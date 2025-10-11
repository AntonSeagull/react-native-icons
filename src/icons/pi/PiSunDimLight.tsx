

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiSunDimLight = (props: IconProps) => {

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
          <Path d="M122,40V32a6,6,0,0,1,12,0v8a6,6,0,0,1-12,0Zm68,88a62,62,0,1,1-62-62A62.07,62.07,0,0,1,190,128Zm-12,0a50,50,0,1,0-50,50A50.06,50.06,0,0,0,178,128ZM59.76,68.24a6,6,0,1,0,8.48-8.48l-8-8a6,6,0,0,0-8.48,8.48Zm0,119.52-8,8a6,6,0,1,0,8.48,8.48l8-8a6,6,0,1,0-8.48-8.48Zm136-136-8,8a6,6,0,1,0,8.48,8.48l8-8a6,6,0,0,0-8.48-8.48Zm.48,136a6,6,0,0,0-8.48,8.48l8,8a6,6,0,0,0,8.48-8.48ZM40,122H32a6,6,0,0,0,0,12h8a6,6,0,0,0,0-12Zm88,88a6,6,0,0,0-6,6v8a6,6,0,0,0,12,0v-8A6,6,0,0,0,128,210Zm96-88h-8a6,6,0,0,0,0,12h8a6,6,0,0,0,0-12Z" />
        </G>
      </Svg>
    );
  }

