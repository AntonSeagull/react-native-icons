

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaSlashSolid = (props: IconProps) => {

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
          <Path d="M 26.28125 4.28125 L 4.28125 26.28125 L 5.71875 27.71875 L 27.71875 5.71875 Z" />
        </G>
      </Svg>
    );
  }

