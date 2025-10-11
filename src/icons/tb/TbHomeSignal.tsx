

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbHomeSignal = (props: IconProps) => {

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
          <Path d="M15 22v-2" />
          <Path d="M18 22v-4" />
          <Path d="M21 22v-6" />
          <Path d="M19 12.494v-.494h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h4" />
          <Path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v.5" />
        </G>
      </Svg>
    );
  }

