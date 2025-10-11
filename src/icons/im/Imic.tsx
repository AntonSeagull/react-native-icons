

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imic = (props: IconProps) => {

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
          <Path d="M15 0h1v11.5c0 1.381-1.567 2.5-3.5 2.5s-3.5-1.119-3.5-2.5c0-1.381 1.567-2.5 3.5-2.5 0.979 0 1.865 0.287 2.5 0.751v-5.751l-8 1.778v7.722c0 1.381-1.567 2.5-3.5 2.5s-3.5-1.119-3.5-2.5c0-1.381 1.567-2.5 3.5-2.5 0.979 0 1.865 0.287 2.5 0.751v-9.751l9-2z" fill="#000000" />
        </G>
      </Svg>
    );
  }

