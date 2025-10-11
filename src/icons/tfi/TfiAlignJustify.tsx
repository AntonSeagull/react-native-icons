

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiAlignJustify = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M17 2v1h-17v-1h17zM0 7h17v-1h-17v1zM0 11h17v-1h-17v1zM0 15h17v-1h-17v1z" fill="#000000" />
        </G>
      </Svg>
    );
  }

