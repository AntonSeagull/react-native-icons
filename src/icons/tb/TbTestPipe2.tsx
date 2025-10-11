

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTestPipe2 = (props: IconProps) => {

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
          <Path d="M15 3v15a3 3 0 0 1 -6 0v-15" />
          <Path d="M9 12h6" />
          <Path d="M8 3h8" />
        </G>
      </Svg>
    );
  }

