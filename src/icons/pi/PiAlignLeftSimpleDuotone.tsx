

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiAlignLeftSimpleDuotone = (props: IconProps) => {

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
          <Path d="M232,96v64a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H224A8,8,0,0,1,232,96Z" />
          <Path d="M40,56V200a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0ZM240,96v64a16,16,0,0,1-16,16H72a16,16,0,0,1-16-16V96A16,16,0,0,1,72,80H224A16,16,0,0,1,240,96Zm-16,64V96H72v64H224Z" />
        </G>
      </Svg>
    );
  }

