

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiMicrosoft = (props: IconProps) => {

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
          <Path d="M7.734 15.723l9.266 1.277v-8.030h-9.266v6.753zM8.734 9.97h7.266v5.883l-7.266-1.002v-4.881zM0 14.661l6.967 0.959v-6.65h-6.967v5.691zM1 9.97h4.967v4.503l-4.967-0.684v-3.819zM0 8.112h6.967v-6.732l-6.967 0.959v5.773zM1 3.21l4.967-0.684v4.585h-4.967v-3.901zM7.734 1.277v6.835h9.266v-8.112l-9.266 1.277zM16 7.112h-7.266v-4.963l7.266-1.002v5.965z" fill="#000000" />
        </G>
      </Svg>
    );
  }

