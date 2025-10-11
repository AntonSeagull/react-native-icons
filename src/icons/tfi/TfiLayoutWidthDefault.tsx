

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutWidthDefault = (props: IconProps) => {

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
          <Path d="M0 0v17h17v-17h-17zM16 16h-15v-15h15v15zM3 8h1v1h-1v-1zM3 4h1v1h-1v-1zM3 10h1v1h-1v-1zM3 6h1v1h-1v-1zM3 2h1v1h-1v-1zM3 14h1v1h-1v-1zM3 12h1v1h-1v-1zM13 2h1v1h-1v-1zM13 6h1v1h-1v-1zM13 4h1v1h-1v-1zM13 8h1v1h-1v-1zM13 10h1v1h-1v-1zM13 12h1v1h-1v-1zM13 14h1v1h-1v-1z" fill="#000000" />
        </G>
      </Svg>
    );
  }

