

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuTextSearch = (props: IconProps) => {

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
          <Path d="M21 5H3" />
          <Path d="M10 12H3" />
          <Path d="M10 19H3" />
          <Path d="m21 19-1.9-1.9" />
        </G>
      </Svg>
    );
  }

