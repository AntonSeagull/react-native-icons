

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuListTodo = (props: IconProps) => {

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
          <Path d="M13 5h8" />
          <Path d="M13 12h8" />
          <Path d="M13 19h8" />
          <Path d="m3 17 2 2 4-4" />
        </G>
      </Svg>
    );
  }

