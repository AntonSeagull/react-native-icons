

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoPlaySkipForwardCircle = (props: IconProps) => {

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
          <Path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm80,272a16,16,0,0,1-32,0V267L192.32,334.44A10.78,10.78,0,0,1,176,325.13V186.87a10.78,10.78,0,0,1,16.32-9.31L304,245V192a16,16,0,0,1,32,0Z" />
        </G>
      </Svg>
    );
  }

