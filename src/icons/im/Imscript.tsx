

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imscript = (props: IconProps) => {

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
          <Path d="M12 14.219v0.781h2v1h-3v-2.281l2-0.938v-0.781h-2v-1h3v2.281zM10.563 4h-2.125l-2.938 2.938-2.938-2.938h-2.125l4 4-4 4h2.125l2.938-2.938 2.938 2.938h2.125l-4-4z" fill="#000000" />
        </G>
      </Svg>
    );
  }

