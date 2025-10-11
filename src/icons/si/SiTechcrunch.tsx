

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiTechcrunch = (props: IconProps) => {

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
          <Path d="M0 6v4h4v8h4v-8h4V6Zm12 4v8h12v-4h-8v-4zm4 0h8V6h-8z" />
        </G>
      </Svg>
    );
  }

