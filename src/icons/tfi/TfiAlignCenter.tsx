

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiAlignCenter = (props: IconProps) => {

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
          <Path d="M17 2v1h-17v-1h17zM1.5 6v1h14v-1h-14zM0 11h17v-1h-17v1zM3.5 15h10v-1h-10v1z" fill="#000000" />
        </G>
      </Svg>
    );
  }

