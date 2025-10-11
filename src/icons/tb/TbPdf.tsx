

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPdf = (props: IconProps) => {

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
          <Path d="M10 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2z" />
          <Path d="M3 12h2a2 2 0 1 0 0 -4h-2v8" />
          <Path d="M17 12h3" />
          <Path d="M21 8h-4v8" />
        </G>
      </Svg>
    );
  }

