

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiSplitVAlt = (props: IconProps) => {

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
          <Path d="M5.354 5.854l-2.647 2.646 2.646 2.646-0.707 0.707-3.353-3.353 3.354-3.354 0.707 0.708zM12.354 5.146l-0.707 0.707 2.646 2.647-2.646 2.646 0.707 0.707 3.353-3.353-3.353-3.354zM8 17h1v-17h-1v17z" fill="#000000" />
        </G>
      </Svg>
    );
  }

