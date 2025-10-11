

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMountainOff = (props: IconProps) => {

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
          <Path d="M18.281 14.26l-4.201 -8.872a2.3 2.3 0 0 0 -4.158 0l-.165 .349m-1.289 2.719l-5.468 11.544h17" />
          <Path d="M7.5 11l2 2.5l2 -2" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

