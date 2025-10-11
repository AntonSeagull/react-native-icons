

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuSmilePlus = (props: IconProps) => {

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
          <Path d="M22 11v1a10 10 0 1 1-9-10" />
          <Path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <Path d="M16 5h6" />
          <Path d="M19 2v6" />
        </G>
      </Svg>
    );
  }

