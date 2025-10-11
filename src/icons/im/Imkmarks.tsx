

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imkmarks = (props: IconProps) => {

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
          <Path d="M4 2v14l5-5 5 5v-14zM12 0h-10v14l1-1v-12h9z" fill="#000000" />
        </G>
      </Svg>
    );
  }

