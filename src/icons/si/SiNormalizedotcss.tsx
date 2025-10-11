

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiNormalizedotcss = (props: IconProps) => {

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
          <Path d="M8.427 6.361v5.064l-5.381.705 7.058.924v-1.915l5.469 6.5v-5.064l5.382-.705-7.059-.924v1.914zM12 0l12 12-12 12L0 12Z" />
        </G>
      </Svg>
    );
  }

