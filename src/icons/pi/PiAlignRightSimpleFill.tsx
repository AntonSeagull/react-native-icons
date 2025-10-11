

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiAlignRightSimpleFill = (props: IconProps) => {

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
          <Path d="M232,56V200a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0ZM184,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V96A16,16,0,0,0,184,80Z" />
        </G>
      </Svg>
    );
  }

