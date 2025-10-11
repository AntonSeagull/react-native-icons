

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBaseline = (props: IconProps) => {

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
          <Path d="M4 20h16" />
          <Path d="M8 16v-8a4 4 0 1 1 8 0v8" />
          <Path d="M8 10h8" />
        </G>
      </Svg>
    );
  }

