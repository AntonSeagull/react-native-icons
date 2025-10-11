

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiBulma = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M11.25 0l-6 6 -1.5 10.5 7.5 7.5 9 -6 -6 -6 4.5 -4.5 -7.5 -7.5Z" />
        </G>
      </Svg>
    );
  }

