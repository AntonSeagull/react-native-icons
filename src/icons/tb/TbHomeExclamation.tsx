

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbHomeExclamation = (props: IconProps) => {

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
          <Path d="M21 12l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h8" />
          <Path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 1.857 1.257" />
          <Path d="M19 16v3" />
          <Path d="M19 22v.01" />
        </G>
      </Svg>
    );
  }

