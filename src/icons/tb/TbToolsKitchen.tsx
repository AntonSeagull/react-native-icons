

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbToolsKitchen = (props: IconProps) => {

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
          <Path d="M4 3h8l-1 9h-6z" />
          <Path d="M7 18h2v3h-2z" />
          <Path d="M20 3v12h-5c-.023 -3.681 .184 -7.406 5 -12z" />
          <Path d="M20 15v6h-1v-3" />
          <Path d="M8 12l0 6" />
        </G>
      </Svg>
    );
  }

