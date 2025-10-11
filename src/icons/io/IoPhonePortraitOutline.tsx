

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoPhonePortraitOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M176,16h24a8,8,0,0,1,8,8h0a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16h0a8,8,0,0,1,8-8h24" />
        </G>
      </Svg>
    );
  }

