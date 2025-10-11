

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutSidebarLeft = (props: IconProps) => {

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
          <Path d="M0 0h5v17h-5v-17zM7 17h1v-1h-1v1zM14.222 17h0.889v-1h-0.889v1zM12.444 17h0.889v-1h-0.889v1zM8.889 17h0.889v-1h-0.889v1zM10.667 17h0.889v-1h-0.889v1zM16 17h1v-1h-1v1zM16 3h1v-1h-1v1zM16 15h1v-1h-1v1zM16 7h1v-1h-1v1zM16 5h1v-1h-1v1zM16 9h1v-1h-1v1zM16 11h1v-1h-1v1zM16 13h1v-1h-1v1zM16 0v1h1v-1h-1zM14.223 1h0.889v-1h-0.889v1zM12.445 1h0.889v-1h-0.889v1zM10.667 1h0.889v-1h-0.889v1zM8.889 1h0.889v-1h-0.889v1zM7 1h1v-1h-1v1zM7 15h1v-1h-1v1zM7 13h1v-1h-1v1zM7 7h1v-1h-1v1zM7 11h1v-1h-1v1zM7 5h1v-1h-1v1zM7 3h1v-1h-1v1zM7 9h1v-1h-1v1z" fill="#000000" />
        </G>
      </Svg>
    );
  }

