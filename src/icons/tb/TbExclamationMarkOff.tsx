

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbExclamationMarkOff = (props: IconProps) => {

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
          <Path d="M12 19v.01" />
          <Path d="M12 15v-3m0 -4v-3" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

