

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTextSpellcheck = (props: IconProps) => {

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
          <Path d="M5 15v-7.5a3.5 3.5 0 0 1 7 0v7.5" />
          <Path d="M5 10h7" />
          <Path d="M10 18l3 3l7 -7" />
        </G>
      </Svg>
    );
  }

