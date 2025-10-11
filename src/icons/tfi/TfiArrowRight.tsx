

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiArrowRight = (props: IconProps) => {

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
          <Path d="M15.707 8.472l-7.354 7.354-0.707-0.707 6.146-6.146h-12.792v-1h12.793l-6.147-6.148 0.707-0.707 7.354 7.354z" fill="#000000" />
        </G>
      </Svg>
    );
  }

