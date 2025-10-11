

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoPauseCircle = (props: IconProps) => {

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
          <Path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM224,320a16,16,0,0,1-32,0V192a16,16,0,0,1,32,0Zm96,0a16,16,0,0,1-32,0V192a16,16,0,0,1,32,0Z" />
        </G>
      </Svg>
    );
  }

