

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imlic = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M14 1v1h-2l-5 12h2v1h-7v-1h2l5-12h-2v-1z" fill="#000000" />
        </G>
      </Svg>
    );
  }

