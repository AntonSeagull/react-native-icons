

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CiCircleAlert = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M12,21.935A9.933,9.933,0,1,1,21.934,12,9.945,9.945,0,0,1,12,21.935ZM12,3.069A8.933,8.933,0,1,0,20.934,12,8.944,8.944,0,0,0,12,3.069Z" />
          <Path d="M12.5,9a.5.5,0,0,0-1,0h0V13.02a.5.5,0,0,0,1,0Z" />
        </G>
      </Svg>
    );
  }

