

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiRuler = (props: IconProps) => {

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
          <Path d="M5 0v17h7v-17h-7zM11 16h-5v-0.984h2v-1h-2v-1.016h1v-1h-1v-1h2v-1h-2v-0.984h1v-1h-1v-1h2v-1h-2v-1.016h1v-1h-1v-1h2v-1h-2v-1h5v15z" fill="#000000" />
        </G>
      </Svg>
    );
  }

