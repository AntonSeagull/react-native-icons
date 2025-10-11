

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiSmallcap = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M6 5.925h1v2h-1v-1h-2v8h1v1h-3v-1h1v-8h-2v1h-1v-2h6zM16 2h-10v2.577h1v-1.577h4v12h-1v1h3v-1h-1v-12h4v1.577h1v-2.577h-1z" fill="#000000" />
        </G>
      </Svg>
    );
  }

