

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuTally5 = (props: IconProps) => {

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
          <Path d="M4 4v16" />
          <Path d="M9 4v16" />
          <Path d="M14 4v16" />
          <Path d="M19 4v16" />
          <Path d="M22 6 2 18" />
        </G>
      </Svg>
    );
  }

