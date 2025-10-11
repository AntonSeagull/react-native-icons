

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiHummer = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M9 4h5.625l-3.609-4h-7.016v4h4v3.723h-1.125v9.277h3.25v-9.277h-1.125v-3.723zM5 1h5.571l1.805 2h-7.376v-2zM9.125 16h-1.25v-7.277h1.25v7.277z" fill="#000000" />
        </G>
      </Svg>
    );
  }

