

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiUserRectangleBold = (props: IconProps) => {

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
          <Path d="M216,36H40A20,20,0,0,0,20,56V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36ZM100,128a28,28,0,1,1,28,28A28,28,0,0,1,100,128Zm28,52a59.66,59.66,0,0,1,40.85,16H87.15A59.66,59.66,0,0,1,128,180Zm84,16H199.56A83.46,83.46,0,0,0,165,164.5a52,52,0,1,0-74,0A83.46,83.46,0,0,0,56.44,196H44V60H212Z" />
        </G>
      </Svg>
    );
  }

