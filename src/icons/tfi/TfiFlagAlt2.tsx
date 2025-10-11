

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiFlagAlt2 = (props: IconProps) => {

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
          <Path d="M15 0v17h-1v-17h1zM4.984 1h8v8h-4.984v2h-7v-8h3.984v-2zM7 9h-2v-5h-3v6h5v-1zM5.984 2v1h0.016v5h5.984v-6h-6z" fill="#000000" />
        </G>
      </Svg>
    );
  }

