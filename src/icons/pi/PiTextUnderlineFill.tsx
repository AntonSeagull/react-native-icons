

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTextUnderlineFill = (props: IconProps) => {

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
          <Path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM80,72a8,8,0,0,1,16,0v48a32,32,0,0,0,64,0V72a8,8,0,0,1,16,0v48a48,48,0,0,1-96,0Zm96,128H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Z" />
        </G>
      </Svg>
    );
  }

