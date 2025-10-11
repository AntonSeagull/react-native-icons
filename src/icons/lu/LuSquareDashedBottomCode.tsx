

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuSquareDashedBottomCode = (props: IconProps) => {

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
          <Path d="M10 9.5 8 12l2 2.5" />
          <Path d="M14 21h1" />
          <Path d="m14 9.5 2 2.5-2 2.5" />
          <Path d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" />
          <Path d="M9 21h1" />
        </G>
      </Svg>
    );
  }

