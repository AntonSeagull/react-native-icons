

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbFaceId = (props: IconProps) => {

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
          <Path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
          <Path d="M4 16v2a2 2 0 0 0 2 2h2" />
          <Path d="M16 4h2a2 2 0 0 1 2 2v2" />
          <Path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
          <Path d="M9 10l.01 0" />
          <Path d="M15 10l.01 0" />
          <Path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
        </G>
      </Svg>
    );
  }

