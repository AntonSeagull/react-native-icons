

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBackhoe = (props: IconProps) => {

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
          <Path d="M4 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M13 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M13 19l-9 0" />
          <Path d="M4 15l9 0" />
          <Path d="M8 12v-5h2a3 3 0 0 1 3 3v5" />
          <Path d="M5 15v-2a1 1 0 0 1 1 -1h7" />
          <Path d="M21.12 9.88l-3.12 -4.88l-5 5" />
          <Path d="M21.12 9.88a3 3 0 0 1 -2.12 5.12a3 3 0 0 1 -2.12 -.88l4.24 -4.24z" />
        </G>
      </Svg>
    );
  }

