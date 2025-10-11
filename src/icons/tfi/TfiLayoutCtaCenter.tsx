

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutCtaCenter = (props: IconProps) => {

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
          <Path d="M14 8h-11v-1h11v1zM17 3v11h-17v-11h17zM16 4h-15v9h15v-9zM6.357 11h4.286v-2h-4.286v2z" fill="#000000" />
        </G>
      </Svg>
    );
  }

