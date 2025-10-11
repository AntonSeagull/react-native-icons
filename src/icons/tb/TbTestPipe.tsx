

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTestPipe = (props: IconProps) => {

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
          <Path d="M20 8.04l-12.122 12.124a2.857 2.857 0 1 1 -4.041 -4.04l12.122 -12.124" />
          <Path d="M7 13h8" />
          <Path d="M19 15l1.5 1.6a2 2 0 1 1 -3 0l1.5 -1.6z" />
          <Path d="M15 3l6 6" />
        </G>
      </Svg>
    );
  }

