

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutMediaRightAlt = (props: IconProps) => {

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
          <Path d="M2 13h15v1h-15v-1zM7 15.993h10v-1h-10v1zM17 1v11h-17v-11h17zM16 2h-15v9h15v-9z" fill="#000000" />
        </G>
      </Svg>
    );
  }

