

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrChatOption = (props: IconProps) => {

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
          <Path d="M9,7 L9,1 L23,1 L23,11 L20,11 L20,16 L15,12 M1,7 L15,7 L15,18 L9,18 L4,22 L4,18 L1,18 L1,7 Z" fill="none" />
        </G>
      </Svg>
    );
  }

