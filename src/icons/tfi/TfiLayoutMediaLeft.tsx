

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutMediaLeft = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M10 4h5.826v1h-5.826v-1z" fill="#000000" />
          <Path d="M10 7.996h3.497v1h-3.497v-1z" fill="#000000" />
          <Path d="M10.009 5.998h6.991v1h-6.991v-1z" fill="#000000" />
          <Path d="M10 9.993h6.991v1h-6.991v-1z" fill="#000000" />
          <Path d="M10 12h5.826v1h-5.826v-1z" fill="#000000" />
          <Path d="M0 13h9v-9h-9v9zM1 5h7v7h-7v-7z" fill="#000000" />
        </G>
      </Svg>
    );
  }

