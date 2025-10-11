

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLockExclamation = (props: IconProps) => {

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
          <Path d="M15 21h-8a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10a2 2 0 0 1 1.734 1.002" />
          <Path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
          <Path d="M8 11v-4a4 4 0 1 1 8 0v4" />
          <Path d="M19 16v3" />
          <Path d="M19 22v.01" />
        </G>
      </Svg>
    );
  }

