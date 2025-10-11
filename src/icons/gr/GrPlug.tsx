

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrPlug = (props: IconProps) => {

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
          <Path d="M15 6V1m-3 23v-9M9 6V1M6 6h12v7a2 2 0 01-2 2H8a2 2 0 01-2-2V6z" />
        </G>
      </Svg>
    );
  }

