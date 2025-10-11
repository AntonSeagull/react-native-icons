

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutColumn2 = (props: IconProps) => {

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
          <Path d="M0 17h8v-17h-8v17zM1 1h6v15h-6v-15zM9 0v17h8v-17h-8zM16 16h-6v-15h6v15z" fill="#000000" />
        </G>
      </Svg>
    );
  }

