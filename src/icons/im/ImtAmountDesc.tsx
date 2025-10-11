

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const ImtAmountDesc = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M5 12v-12h-2v12h-2.5l3.5 3.5 3.5-3.5h-2.5z" fill="#000000" />
          <Path d="M7 0h9v2h-9v-2z" fill="#000000" />
          <Path d="M7 3h7v2h-7v-2z" fill="#000000" />
          <Path d="M7 6h5v2h-5v-2z" fill="#000000" />
          <Path d="M7 9h3v2h-3v-2z" fill="#000000" />
        </G>
      </Svg>
    );
  }

