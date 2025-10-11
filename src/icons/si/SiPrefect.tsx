

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiPrefect = (props: IconProps) => {

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
          <Path d="M12 8.003 4.288 4.002 12 0l7.713 4v8.004L12 16v8l-7.71-4v-8L12 16V8.003Z" />
        </G>
      </Svg>
    );
  }

