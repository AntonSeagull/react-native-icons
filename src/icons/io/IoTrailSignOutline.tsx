

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoTrailSignOutline = (props: IconProps) => {

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
          <Path d="M416,208H102.63a16,16,0,0,1-11.32-4.69L32,144,91.31,84.69A16,16,0,0,1,102.63,80H416a16,16,0,0,1,16,16v96A16,16,0,0,1,416,208Z" />
          <Path d="M96,400H409.37a16,16,0,0,0,11.32-4.69L480,336l-59.31-59.31A16,16,0,0,0,409.37,272H96a16,16,0,0,0-16,16v96A16,16,0,0,0,96,400Z" />
        </G>
      </Svg>
    );
  }

