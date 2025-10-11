

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const ImressBook = (props: IconProps) => {

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
          <Path d="M3 0v16h12v-16h-12zM9 4.005c1.102 0 1.995 0.893 1.995 1.995s-0.893 1.995-1.995 1.995-1.995-0.893-1.995-1.995 0.893-1.995 1.995-1.995v0zM12 12h-6v-1c0-1.105 0.895-2 2-2v0h2c1.105 0 2 0.895 2 2v1z" fill="#000000" />
          <Path d="M1 1h1.5v3h-1.5v-3z" fill="#000000" />
          <Path d="M1 5h1.5v3h-1.5v-3z" fill="#000000" />
          <Path d="M1 9h1.5v3h-1.5v-3z" fill="#000000" />
          <Path d="M1 13h1.5v3h-1.5v-3z" fill="#000000" />
        </G>
      </Svg>
    );
  }

