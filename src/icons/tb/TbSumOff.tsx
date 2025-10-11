

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSumOff = (props: IconProps) => {

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
          <Path d="M18 18a1 1 0 0 1 -1 1h-11l6 -7m-3 -7h8a1 1 0 0 1 1 1v2" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

