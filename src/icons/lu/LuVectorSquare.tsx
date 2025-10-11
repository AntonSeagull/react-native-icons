

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuVectorSquare = (props: IconProps) => {

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
          <Path d="M19.5 7a24 24 0 0 1 0 10" />
          <Path d="M4.5 7a24 24 0 0 0 0 10" />
          <Path d="M7 19.5a24 24 0 0 0 10 0" />
          <Path d="M7 4.5a24 24 0 0 1 10 0" />
        </G>
      </Svg>
    );
  }

