

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutCtaRight = (props: IconProps) => {

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
          <Path d="M0 3v11h17v-11h-17zM16 13h-15v-9h15v9zM14 8h-10v-1h10v1zM9 9h5v2h-5v-2z" fill="#000000" />
        </G>
      </Svg>
    );
  }

