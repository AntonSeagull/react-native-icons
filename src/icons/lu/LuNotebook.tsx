

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuNotebook = (props: IconProps) => {

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
          <Path d="M2 6h4" />
          <Path d="M2 10h4" />
          <Path d="M2 14h4" />
          <Path d="M2 18h4" />
          <Path d="M16 2v20" />
        </G>
      </Svg>
    );
  }

