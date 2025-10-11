

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiPolymerproject = (props: IconProps) => {

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
          <Path d="M14.4 3.686L7.2 16.16 4.8 12l4.8-8.314H4.8L0 12l2.4 4.159 2.4 4.155h4.8l7.2-12.469L19.2 12l-4.8 8.314h4.8l2.4-4.155L24 12l-2.4-4.155-2.4-4.159Z" />
        </G>
      </Svg>
    );
  }

