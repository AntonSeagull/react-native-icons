

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcUpLeft = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M42,27v13h-8V27c0-2.2-1.8-4-4-4H13v-8h17C36.6,15,42,20.4,42,27z" fill="#3F51B5" />
        </G>
      </Svg>
    );
  }

