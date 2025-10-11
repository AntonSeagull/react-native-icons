

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiWand = (props: IconProps) => {

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
          <Path d="M17 5h-3.293l2.328 2.328-0.707 0.707-2.328-2.328v3.293h-1v-3.286l-10.646 10.665-0.707-0.707 10.653-10.672h-3.3v-1h3.293l-2.328-2.328 0.707-0.707 2.328 2.328v-3.293h1v3.297l2.287-2.291 0.707 0.707-2.283 2.287h3.289v1z" fill="#000000" />
        </G>
      </Svg>
    );
  }

