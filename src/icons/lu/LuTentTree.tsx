

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuTentTree = (props: IconProps) => {

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
          <Path d="m14 5 3-3 3 3" />
          <Path d="m14 10 3-3 3 3" />
          <Path d="M17 14V2" />
          <Path d="M17 14H7l-5 8h20Z" />
          <Path d="M8 14v8" />
          <Path d="m9 14 5 8" />
        </G>
      </Svg>
    );
  }

