

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcFactory = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M41.2,5h-7.3L32,43h11L41.2,5z" fill="#BF360C" />
          <Path d="M33,23h-4v-6l-12,6v-6L5,23v20h28V23z" fill="#E64A19" />
        </G>
      </Svg>
    );
  }

