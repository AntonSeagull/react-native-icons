

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiMerck = (props: IconProps) => {

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
          <Path d="M6 6a6 6 0 0112 0zm0 12a6 6 0 016-6 6 6 0 01-6-6 6 6 0 000 12 a6 6 0 1012 0zm6-6a6 6 0 016 6 6 6 0 100-12c0 3.314-2.686 6-6 6" />
        </G>
      </Svg>
    );
  }

