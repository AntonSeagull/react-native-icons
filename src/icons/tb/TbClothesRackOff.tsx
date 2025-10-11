

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbClothesRackOff = (props: IconProps) => {

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
          <Path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M12 7v1m0 4v9" />
          <Path d="M9 21h6" />
          <Path d="M7.757 9.243a6 6 0 0 0 3.129 1.653m3.578 -.424a6 6 0 0 0 1.779 -1.229" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

