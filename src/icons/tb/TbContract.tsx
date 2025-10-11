

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbContract = (props: IconProps) => {

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
          <Path d="M8 21h-2a3 3 0 0 1 -3 -3v-1h5.5" />
          <Path d="M17 8.5v-3.5a2 2 0 1 1 2 2h-2" />
          <Path d="M19 3h-11a3 3 0 0 0 -3 3v11" />
          <Path d="M9 7h4" />
          <Path d="M9 11h4" />
          <Path d="M18.42 12.61a2.1 2.1 0 0 1 2.97 2.97l-6.39 6.42h-3v-3z" />
        </G>
      </Svg>
    );
  }

