

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBraille = (props: IconProps) => {

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
          <Path d="M15 5a1 1 0 1 0 2 0a1 1 0 0 0 -2 0z" />
          <Path d="M7 5a1 1 0 1 0 2 0a1 1 0 0 0 -2 0z" />
          <Path d="M7 19a1 1 0 1 0 2 0a1 1 0 0 0 -2 0z" />
          <Path d="M16 12h.01" />
          <Path d="M8 12h.01" />
          <Path d="M16 19h.01" />
        </G>
      </Svg>
    );
  }

