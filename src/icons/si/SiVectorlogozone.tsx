

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiVectorlogozone = (props: IconProps) => {

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
          <Path d="M19.458 0l-5.311 2.024 1.989.534-4.847 16.085-4.867-16.25H1.48L8.974 24h4.645l7.043-20.226 1.858.499Z" />
        </G>
      </Svg>
    );
  }

