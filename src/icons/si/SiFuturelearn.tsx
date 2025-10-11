

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiFuturelearn = (props: IconProps) => {

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
          <Path d="M22.081.61v7.566h-7.223v6.661H7.566v6.634H0v1.92h9.471v-6.649h7.306v-6.66H24V.61Z" />
        </G>
      </Svg>
    );
  }

