

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaUploadSolid = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M 16 3.59375 L 15.28125 4.28125 L 8.28125 11.28125 L 9.71875 12.71875 L 15 7.4375 L 15 24 L 17 24 L 17 7.4375 L 22.28125 12.71875 L 23.71875 11.28125 L 16.71875 4.28125 Z M 7 26 L 7 28 L 25 28 L 25 26 Z" />
        </G>
      </Svg>
    );
  }

