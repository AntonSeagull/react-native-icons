

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imice = (props: IconProps) => {

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
          <Path d="M0 16h8v-16h-8v16zM5 2h2v2h-2v-2zM5 6h2v2h-2v-2zM5 10h2v2h-2v-2zM1 2h2v2h-2v-2zM1 6h2v2h-2v-2zM1 10h2v2h-2v-2zM9 5h7v1h-7zM9 16h2v-4h3v4h2v-9h-7z" fill="#000000" />
        </G>
      </Svg>
    );
  }

