

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLetterB = (props: IconProps) => {

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
          <Path d="M7 20v-16h6a4 4 0 0 1 0 8a4 4 0 0 1 0 8h-6" />
          <Path d="M7 12l6 0" />
        </G>
      </Svg>
    );
  }

