

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiAlignRightSimpleBold = (props: IconProps) => {

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
          <Path d="M236,56V200a12,12,0,0,1-24,0V56a12,12,0,0,1,24,0ZM196,96v64a20,20,0,0,1-20,20H32a20,20,0,0,1-20-20V96A20,20,0,0,1,32,76H176A20,20,0,0,1,196,96Zm-24,4H36v56H172Z" />
        </G>
      </Svg>
    );
  }

