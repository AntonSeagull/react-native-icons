

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const ImderOpen = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M13 15l3-8h-13l-3 8zM2 6l-2 9v-13h4.5l2 2h6.5v2z" fill="#000000" />
        </G>
      </Svg>
    );
  }

