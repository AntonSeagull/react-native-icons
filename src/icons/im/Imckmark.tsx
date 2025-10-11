

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imckmark = (props: IconProps) => {

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
          <Path d="M13.5 2l-7.5 7.5-3.5-3.5-2.5 2.5 6 6 10-10z" fill="#000000" />
        </G>
      </Svg>
    );
  }

