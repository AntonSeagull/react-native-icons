

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuList = (props: IconProps) => {

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
          <Path d="M3 5h.01" />
          <Path d="M3 12h.01" />
          <Path d="M3 19h.01" />
          <Path d="M8 5h13" />
          <Path d="M8 12h13" />
          <Path d="M8 19h13" />
        </G>
      </Svg>
    );
  }

