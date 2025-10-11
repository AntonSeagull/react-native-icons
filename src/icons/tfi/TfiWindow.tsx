

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiWindow = (props: IconProps) => {

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
          <Path d="M0 1v15h17v-15h-17zM16 2v3h-15v-3h15zM1 15v-9h15v9h-15zM7 4h-1v-1h1v1zM5 4h-1v-1h1v1zM3 4h-1v-1h1v1z" fill="#000000" />
        </G>
      </Svg>
    );
  }

