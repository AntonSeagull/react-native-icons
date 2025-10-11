

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiEjectSimpleFill = (props: IconProps) => {

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
          <Path d="M232,200a8,8,0,0,1-8,8H32a8,8,0,1,1,0-16H224A8,8,0,0,1,232,200ZM40.09,160H215.91a16.1,16.1,0,0,0,12.48-26.23L146.74,32.94a24.11,24.11,0,0,0-37.48,0L27.61,133.77A16.1,16.1,0,0,0,40.09,160Z" />
        </G>
      </Svg>
    );
  }

