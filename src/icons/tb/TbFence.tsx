

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbFence = (props: IconProps) => {

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
          <Path d="M4 12v4h16v-4z" />
          <Path d="M6 16v4h4v-4m0 -4v-6l-2 -2l-2 2v6" />
          <Path d="M14 16v4h4v-4m0 -4v-6l-2 -2l-2 2v6" />
        </G>
      </Svg>
    );
  }

