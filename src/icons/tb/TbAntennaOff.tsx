

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAntennaOff = (props: IconProps) => {

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
          <Path d="M20 4v8" />
          <Path d="M16 4.5v7" />
          <Path d="M12 5v3m0 4v9" />
          <Path d="M8 8v2.5" />
          <Path d="M4 6v4" />
          <Path d="M20 8h-8m-4 0h-4" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

