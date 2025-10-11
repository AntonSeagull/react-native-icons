

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Implay = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M0 1v10h16v-10h-16zM15 10h-14v-8h14v8zM10.5 12h-5l-0.5 2-1 1h8l-1-1z" fill="#000000" />
        </G>
      </Svg>
    );
  }

